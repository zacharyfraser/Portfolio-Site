@echo off

rem Start frontend in a new terminal
start "frontend" cmd /k "npm start"

rem Start backend in a new terminal
start "backend" cmd /k "cd backend && npm start"
