# 🧾 Nota de Pedido - Mari & Freitas Indústria de Blocos

Aplicação web para emissão e gestão de notas de pedido.  
Frontend em React, Backend com Express + SQLite.

---

## 🧩 Estrutura do Projeto

nota-pedido-app/
├── client/ # Frontend (React + Vite)
│ └── src/
│ ├── assets/ # Imagens e logos
│ ├── components/ # Componentes React
│ ├── App.jsx # Componente principal
│ ├── main.jsx # Entrada da app
│ └── index.css # Estilos globais
├── server/ # Backend (Node.js + Express + SQLite)
│ ├── index.js # API principal
│ └── notas.db # Base de dados local
└── README.md

---

## 🚀 Como executar localmente

### 🔧 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

---

### ⚙️ 1. Instalar o Frontend

```bash
cd client
npm install
npm run dev
📌 A app abre em: http://localhost:5173

⚙️ 2. Iniciar o Backend

```bash
cd ../server
npm install
node index.js
📌 API ativa em: http://localhost:4000

📥 Funcionalidades

🖊️ Formulário dinâmico de nota de pedido

💾 Armazenamento no SQLite (local)

📄 Geração de PDF da nota

🖨️ Impressão direta

🔍 Consulta futura de notas via API

📦 API Endpoints
POST /notas
Cria uma nova nota

json
Copiar
Editar
{
  "cliente": {
    "nome": "João",
    "rua": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cidade": "P. Grande"
  },
  "itens": [
    { "quant": 10, "codigo": "001", "desc": "Tijolo", "total": 100 }
  ],
  "total": 100
}
GET /notas
Lista todas as notas

📌 Tecnologias

React 18

Vite

Express

SQLite3

Axios

html2canvas + jsPDF

📷 Logotipo
<img src="./client/src/assets/logo.png" width="200" />
📚 Autor
Desenvolvido por Jane Fernanda Martins.