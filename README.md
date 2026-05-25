# This is the source of truth for the go class server

## Trnsitioning to OSN-based teaching

1. Access to https://canvas.corrections.sbctc.edu/courses/392419000000591 over internet and OSN
1. Access to http://canvas.ed1.osn.wa.gov only from withing OSN capable hardware, mostly local from within the facility
1. Access to https://edmonds.instructure.com/courses/1773089/ over the internet except from withing DOC network: persmission to access denied by DOC IT.
1. Access to https://sbctc.instructure.com/ access similar to edmonds canvas. 
1. One login using ctclink credentials for both edmondsinstructure as well as sbctc.instructure

## Challenges of working with different canvas instances

1. Impossible to keep them synchronized: images/files links are destroyed when exporting/importing
1. Unable to keep git repository in sync with canvas shell materials due to links and resource access different logic.
1. Only the full export/import of a course might work correctly, partial or one module imports are not ideal
1. When reexporting/reimporting a course it does not overwrite, it just added duplicated items to the target course.
1. Giving up on that. Transferring everything to https://github.com/nelsonlopezjimenez/class-server-resources repo to https://github.com/nelsonlopezjimenez/class-server-resources/tree/main/markdown/lessons/week00
1. NOT TO : https://github.com/nelsonlopezjimenez/webdev-certificate-monorepo-solution repo
