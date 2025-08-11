
## 🛠️ Solución al error de WSL en VSCode

**Error:**
```
The terminal process "C:\WINDOWS\System32\wsl.exe '-d', 'Ubuntu-22.04'" terminated with exit code: -1073741510
```

El código de salida `-1073741510` indica que el proceso fue interrumpido o terminó de forma inesperada.

---

### ✅ Pasos para solucionar el problema

1. ### 🔄 Reiniciar WSL
   Abre PowerShell como administrador y ejecuta:
   ```powershell
   wsl --shutdown
   ```
   Luego intenta abrir de nuevo tu terminal en VSCode.

2. ### 🔍 Verificar que la distribución está instalada
   Ejecuta:
   ```powershell
   wsl -l -v
   ```
   Asegúrate de que `Ubuntu-22.04` aparece en la lista y tiene un estado correcto.

3. ### ▶️ Probar iniciar WSL manualmente
   Desde PowerShell o CMD:
   ```powershell
   wsl -d Ubuntu-22.04
   ```
   Si falla, puede darte un mensaje más específico sobre el problema.

4. ### 🔧 Actualizar WSL y el kernel
   - Actualiza WSL:
     ```powershell
     wsl --update
     ```
   - Descarga e instala manualmente el kernel si es necesario:  
     👉 [https://aka.ms/wsl2kernel](https://aka.ms/wsl2kernel)

5. ### ⚙️ Revisar configuración de terminal en VSCode
   Asegúrate de tener esto en tu `settings.json`:
   ```json
   "terminal.integrated.defaultProfile.windows": "Ubuntu-22.04"
   ```

6. ### 🧼 Reinstalar Ubuntu (solo si nada funciona)

   - Desinstala Ubuntu:
     ```powershell
     wsl --unregister Ubuntu-22.04
     ```
   - Reinstálala desde Microsoft Store.
