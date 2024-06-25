import pandas as pd
import datetime
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.dummy import DummyClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

def calcula_idade(data_nascimento, data_atual):
    return data_atual.year - data_nascimento.year - ((data_atual.month, data_atual.day) < (data_nascimento.month, data_nascimento.day))

def tratar_dados() -> pd.DataFrame:
    dados = pd.read_csv('DADOS_ANALISE.txt', sep=';')
        
    dados['DT_NASCIMENTO'] = pd.to_datetime(dados['DT_NASCIMENTO'])
    dados['DT_DIB'] = pd.to_datetime(dados['DT_DIB'])
    dados['DT_INICIO_DESCONTO'] = pd.to_datetime(dados['DT_INICIO_DESCONTO'])

    dados['VL_BENEFICIO'] = dados['VL_BENEFICIO'].apply(lambda x: x.replace(',','.').strip())
    dados['VL_BENEFICIO'] = dados['VL_BENEFICIO'].astype(np.float64)

    dados['MARGEM_35'] = dados['MARGEM_35'].apply(lambda x: x.replace(',','.').strip())
    dados['MARGEM_35'] = dados['MARGEM_35'].astype(np.float64)

    dados['VL_EMPRESTIMO'] = dados['VL_EMPRESTIMO'].apply(lambda x: x.replace(',','.').strip())
    dados['VL_EMPRESTIMO'] = dados['VL_EMPRESTIMO'].astype(np.float64)

    dados['VL_PARCELA'] = dados['VL_PARCELA'].apply(lambda x: x.replace(',','.').strip())
    dados['VL_PARCELA'] = dados['VL_PARCELA'].astype(np.float64)

    dados['TAXA'] = dados['TAXA'].apply(lambda x: x.replace(',','.').strip())
    dados['TAXA'] = dados['TAXA'].astype(np.float64)

    data_atual = datetime.datetime.now()
    dados['IDADE'] = dados['DT_NASCIMENTO'].apply(lambda x: calcula_idade(x, data_atual))

    dados = dados[dados['MARGEM_35'] > 0]
    dados = dados[dados['IDADE']<=85]
    return dados

dados = tratar_dados()

def margem_uf(uf=None) -> pd.DataFrame:
    margem_unica_uf = dados.drop_duplicates(subset='ID_BENEFICIO')
    if uf is not None:
        return pd.DataFrame({'UF': [uf], 'TOTAL': [margem_unica_uf[margem_unica_uf['UF'] == uf]['MARGEM_35'].sum()]}).to_json(index=False)
    else:
        return pd.DataFrame(margem_unica_uf.groupby('UF')['MARGEM_35'].sum().reset_index().rename(columns={'MARGEM_35': 'TOTAL'})).to_json(index=False)


def descricao_margem_35() -> pd.DataFrame:
    descricao_marger_uf = dados.groupby('UF')['MARGEM_35'].describe().round(2)
    descricao_marger_uf.columns = ['QUANTIDADE', 'MEDIA', 'DESVIO PADRAO', 'MINIMO', 'Q1-25%', 'Q2-50%', 'Q3-75%', 'MAXIMO']
    descricao_marger_uf = descricao_marger_uf.reset_index()
    #descricao_marger_uf['QUANTIDADE'] = descricao_marger_uf['QUANTIDADE'].astype(int)
    return descricao_marger_uf.to_json(index=False)

def descricao_margem_35_idade() -> pd.DataFrame:
    descricao_marger_idade = dados.groupby('IDADE')['MARGEM_35'].describe().round(2)
    descricao_marger_idade.columns = ['QUANTIDADE', 'MEDIA', 'DESVIO PADRAO', 'MINIMO', 'Q1-25%', 'Q2-50%', 'Q3-75%', 'MAXIMO']
    descricao_marger_idade = descricao_marger_idade.reset_index()
    #descricao_marger_uf['QUANTIDADE'] = descricao_marger_uf['QUANTIDADE'].astype(int)
    return descricao_marger_idade.to_json(index=False)


def distribuicao_idade_por_uf() -> pd.DataFrame:
    distribuicao_idade_uf = dados.pivot_table(index='IDADE', columns='UF', aggfunc='size', fill_value=0)
    distribuicao_idade_uf = distribuicao_idade_uf.reset_index()
    return distribuicao_idade_uf.to_json(index=False)


def media_beneficio_por_uf() -> pd.DataFrame:
    media_beneficio_uf = dados.groupby('UF')['VL_BENEFICIO'].mean().round(2).reset_index()
    media_beneficio_uf.columns = ['UF', 'MEDIA_BENEFICIO']
    return media_beneficio_uf.to_json(index=False)


def distribuicao_emprestimo_por_idade() -> pd.DataFrame:
    distribuicao_emprestimo_idade = dados.groupby('IDADE')['VL_EMPRESTIMO'].describe().round(2)
    distribuicao_emprestimo_idade.columns = ['QUANTIDADE', 'MEDIA', 'DESVIO PADRAO', 'MINIMO', 'Q1-25%', 'Q2-50%', 'Q3-75%', 'MAXIMO']
    distribuicao_emprestimo_idade = distribuicao_emprestimo_idade.reset_index()  # Reseta o índice para incluir 'IDADE' como coluna
    return distribuicao_emprestimo_idade.to_json(index=False)