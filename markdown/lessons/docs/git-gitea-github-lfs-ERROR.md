git lfs status
On branch development
Objects to be pushed to gitea/development:

        chakraFrontend/node_modules.tgz (336c36fc3302652b606963a5345fb858664f0f1e78d88b55f6cfda2ab69e41bd)        classServer.exe (241450d56860339ed9376d48e6fd855139d348f00816ae5b415446c62d9d94a2)
        ~Desktop/classroom/classServer/classServer.exe (19509e1d0bfc39932c19801ede0cfd00fc26932a21cbd48b37024cda45f31a26)
        ~Desktop/classroom/classServer/classServer.exe (b6055dcdae72f42ccf68cbbaafcf60441288003ca68d9195b142da685d4a8182)
        ~Desktop/classroom/classServer/classServer.exe (4a5a8b5e918c17e767ce5cc81dd6673c8206c3bad61c96d617501764f2c7843a)
        chakraFrontend/node_modules.tgz (a86d7a4167c25f5c3fee696926576752a8c8e30f2a4c27162708f93936358ca3)        classServer.exe (ab3ff2b671d1dd281b1cb584c0b1035ae41cf4ec406030766e931abda7e199d0)
        classServer.exe (d1ea4cc2ecbc6c145f5c6c75974ef18191bf95dd40d4aff9f7c64f1fffc77424)
        frontend/node_modules.tgz (db5ee139ed7c4441369eb693985117c300a728b24e0db4f2c88f98973a7e22cf)
        main.exe (94bd1822fffab24151d229b93c97c51891cf9bd45b53a4509ccfbd425f0d0e00)
        chakraFrontend/node_modules.tgz (42f8c669fb9c93a4dffe1ef3cbeed1e92bb6326a10bc391b710a8f28da27ab8c)        main.exe (2f0cb9227b39de1e4f8732ebf92c3b414b50675f85c65954152c915af3ba4ae0)
        chakraFrontend/node_modules.tgz (8af2a2dc0a625cfc4fda12655ae034bfd986fd0fbdbad930637fb2bbad0c6b2e)        main.exe (b48789d6f31892df07662cf5962651f9a9c037508961fa37229f1bff87e8589d)
        main.exe (e469aedfb8d5eac58f80c08de80bad7732bce0c68f9b59ad3fa3ca1ad6c51982)
        main.exe (89a3058943c78ad9fb0e3f7f457e44714a73f5ed7ecc6e9bb60804f711783cfb)
        main.exe (78ceeefde952c2ed8102f378d2c3268054fd4bcdca8ac56f68956ea3a248cb95)
        main.exe (8fe7dbb1cb6c8856217a6923dbfe85d6eb9c862f2f93cd30e31e19f2d6d4e31d)
        main.exe (70e04d0af09271f52a25b60be73d3edbc112a7462c921ead62642dbce4303adc)
        main.exe (968182dad3d500a929b8c7598c01631cfdb97bf550e12ac22e7a9127c5671308)
        main.exe (08a1ffc25bc72d6a7cfbbc9b77883118d22ac790040df1f4735e1162448cfebb)
        main.exe (5861bc490dff1744fe51e7d511e32b0f6f997f86e22459e08e88250c66fd6e77)

Objects to be committed:


Objects not staged for commit:

        Videos (Git: 14865dc -> File: deleted)





$ git push github --all
Enumerating objects: 1624, done.
Counting objects: 100% (1624/1624), done.
Delta compression using up to 4 threads
Compressing objects: 100% (750/750), done.
Writing objects: 100% (1624/1624), 378.85 MiB | 4.79 MiB/s, done.
Total 1624 (delta 789), reused 1624 (delta 789), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (789/789), done.
remote: warning: See https://gh.io/lfs for more information.
remote: warning: File chakraFrontend/node_modules.tgz is 75.85 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File chakraFrontend/node_modules.tgz is 74.05 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File chakraFrontend/node_modules.tgz is 76.17 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File chakraFrontend/node_modules.tgz is 83.21 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
remote: error: GH008: Your push referenced at least 17 unknown Git LFS objects:
remote:     241450d56860339ed9376d48e6fd855139d348f00816ae5b415446c62d9d94a2
remote:     19509e1d0bfc39932c19801ede0cfd00fc26932a21cbd48b37024cda45f31a26
remote:     b6055dcdae72f42ccf68cbbaafcf60441288003ca68d9195b142da685d4a8182
remote:     ...
remote: Try to push them with 'git lfs push --all'.
To github.com:nelsonlopezjimenez/go-class-server.git
 ! [remote rejected] development -> development (pre-receive hook declined)
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'github.com:nelsonlopezjimenez/go-class-server.git'
