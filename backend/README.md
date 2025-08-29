# SNU Startup Camp App

## Backend (Django)
- Create venv (already created):
```bash
"C:/Users/USER/AppData/Local/Programs/Python/Python312/python.exe" -m venv backend/.venv
```
- Activate:
```bash
backend/.venv/Scripts/activate
```
- Install deps:
```bash
backend/.venv/Scripts/pip install -r backend/requirements.txt
```
- Run dev:
```bash
cd backend && ./.venv/Scripts/python manage.py runserver
```
- API:
```bash
GET http://localhost:8000/api/health
```

## Frontend (React + Vite)
- Dev server:
```bash
cd frontend && npm run dev
```
- Open:
http://localhost:5173
- Proxy: requests to /api/* go to http://localhost:8000

## Environment
- Node: v22.14.0, npm: 10.9.2
- Python: backend venv uses 3.12 at backend/.venv
