localepsilon@cis0768 MINGW64 ~/Documents/__REPO/technology-basics (main)
$ ./techbasic.exe
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery m
iddleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in produ
ction.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /assets/*filepath         --> github.com/gin-gonic/gin.(*Rout
erGroup).createStaticHandler.func1 (3 handlers)
[GIN-debug] HEAD   /assets/*filepath         --> github.com/gin-gonic/gin.(*Rout
erGroup).createStaticHandler.func1 (3 handlers)
[GIN-debug] GET    /content/*path            --> main.main.func1 (3 handlers)
[GIN-debug] GET    /                         --> main.main.func2 (3 handlers)
[GIN-debug] [WARNING] You trusted all proxies, this is NOT safe. We recommend yo
u to set a value.
Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-
proxies for details.
[GIN-debug] Listening and serving HTTP on :4201
[GIN-debug] [ERROR] listen tcp :4201: bind: Only one usage of each socket addres
s (protocol/network address/port) is normally permitted.

localepsilon@cis0768 MINGW64 ~/Documents/__REPO/technology-basics (main)
