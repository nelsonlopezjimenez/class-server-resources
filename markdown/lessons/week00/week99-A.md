Python on Windows usually comes with pip already. Here's the full sequence:

---

**Step 1 — Verify Python is installed**
```bash
python --version
pip --version
```
If `python` isn't found, try `python3`. If neither works, Python needs to be installed — but IT already allowed it, so it should be there.

---

**Step 2 — Create a virtual environment**
```bash
cd your-project-folder
python -m venv venv
```
This creates a `venv/` folder. Never commit it — add it to `.gitignore`.

---

**Step 3 — Activate the venv**
```bash
# Command Prompt
venv\Scripts\activate.bat

# PowerShell
venv\Scripts\Activate.ps1
```
Your prompt will change to `(venv)` when active.

> **PowerShell gotcha** — if you get a script execution error, run this once:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```

---

**Step 4 — Install Flask**
```bash
pip install flask
```

**Step 5 — Verify**
```bash
python -m flask --version
```

---

**Step 6 — Freeze dependencies**
```bash
pip freeze > requirements.txt
```
Students cloning the project later run `pip install -r requirements.txt` to replicate the environment.

---

**Classroom tip** — if machines share a disk image and venvs get wiped, keep a `requirements.txt` in the starter repo so students can rebuild with one command. Want a starter `app.py` and project scaffold to go with this?

**`-Scope CurrentUser` — no admin needed.** That's the whole reason for that flag.

The scope options matter:

| Scope | Requires admin? |
|---|---|
| `CurrentUser` | No — affects only the logged-in user |
| `LocalMachine` | Yes — affects all users on the machine |
| `Process` | No — only for the current terminal session |

For a classroom where students have local (non-admin) accounts, `CurrentUser` is the right call. Each student sets it once on their own profile and it persists.

If even that is locked down by IT group policy, the fallback is:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
This only lasts for the current terminal session — students would need to run it each time, but it requires zero privileges and can't be blocked by group policy.

Want me to put together a one-page student setup guide they can follow on day one?