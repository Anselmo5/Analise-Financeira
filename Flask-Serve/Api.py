from flask import Flask,jsonify
from flask_cors import CORS
import App

app = Flask(__name__)
CORS(app)

CORS(app, origins=[
    "http://localhost:5173/grafico"
])


@app.route("/")

def grafico_margem_uf():
    grafico_margem_uf = App.margem_uf

    return grafico_margem_uf

def descricao_margem_uf():
    descricao_margem_uf = App.descricao_margem_35

    return descricao_margem_uf

def descricao_margem_idade():
    descricao_margem_idade = App.descricao_margem_35_idade

    return descricao_margem_idade

# def distribuicao_idade_uf():
#     distribuicao_idade_uf = App.distribuicao_idade_por_uf

#     return distribuicao_idade_uf


# def media_beneficio_uf():
#     media_beneficio_uf = App.media_beneficio_por_uf()

#     return media_beneficio_uf

# def distribuicao_emprestimo_idade():
#     distribuicao_emprestimo_idade = App.distribuicao_emprestimo_por_idade()

#     return distribuicao_emprestimo_idade


if __name__ == '__main__':
    app.run(debug=True)