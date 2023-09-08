# egcoo.github.io

Egcoo's personal site

# 常用 Git 命令清单

注：原始作者为阮一峰，后在此基础上做修改

几个专有名词的译名

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）
- Remote：远程仓库

## 一、新建代码库

在当前目录新建一个 Git 代码库
git init

新建一个目录，将其初始化为 Git 代码库
git init [project-name]

下载一个项目和它的整个代码历史
git clone [url]

## 二、配置

显示当前的 Git 配置
git config --list

编辑 Git 配置文件
git config -e [--global]

设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"

## 三、增加/删除文件

添加指定文件到暂存区
git add [file1] [file2] ...

添加指定目录到暂存区，包括子目录
git add [dir]

添加当前目录的所有文件到暂存区
git add .

删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

## 四、代码提交

提交暂存区到仓库区
git commit -m ["message"]

提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m ["message"]

## 五、分支: 一个分支就是一组独特的代码更改

注意的点：

1. 在不同分支工作时，不会在另外分支显示，也就不会对另外分支造成影响。
2. HEAD 指向整个分支中的最新提交

git switch 命令和 git checkout 命令的区别

1. git switch 命令是自 Git 2.23 版本引入的，而 git checkout 命令则是 Git 的早期命令。所以，在使用 Git 的最新版本时，建议使用 git switch 命令。
2. git switch 命令只用于分支操作，而 git checkout 命令除了可以切换分支外，还可以用于恢复文件。
3. git switch 命令更加直观，因为它的名称明确地表明了其用途。与此相比，git checkout 命令有时会令人困惑，因为它还有其他用途，例如创建分支或标签。
4. git switch 命令在切换分支时更加安全。**它会检查当前分支是否被修改并拒绝切换，以避免潜在的代码丢失。**而 git checkout 命令则没有这种检查机制，所以在切换分支时需要特别小心，以免不小心覆盖了未提交的更改。

列出所有本地分支
git branch

新建一个分支，但依然停留在当前分支
git branch [branch-name]

新建一个分支，并切换到该分支
git checkout -b [branch]

切换到指定分支，并更新工作区
git switch

切换到指定分支，并更新工作区
git checkout [branch-name]

切换到上一个分支
git checkout -

合并指定分支到当前分支
git merge [branch]

选择一个 commit，合并进当前分支
git cherry-pick [commit]

删除分支
git branch -d [branch-name]

## 七、查看信息

git ls-files 命令会返回 Git 仓库中所有的 已跟踪文件（tracked files）。"已跟踪文件"是指那些已经被 Git 管理的文件，包括已经提交到仓库中的文件以及在工作目录中的新文件。

显示有变更的文件
git status

显示当前分支的版本历史、提交历史
git log

列出仓库中所有被跟踪的文件。
git ls-files

列出仓库中所有未被跟踪的文件。这些文件可能包含在 .gitignore 文件中，因此不会被 Git 版本控制系统跟踪。
git ls-files --others

列出仓库中所有被修改过但还未提交的文件。
git ls-files --modified

列出仓库中所有被跟踪的文件，以及它们在索引中的状态。
git ls-files --stage

## 九、撤销

恢复暂存区的指定文件到工作区:在工作区修改了一个文件,发现修改错了,想撤销修改,就可以用 git restore 把文件恢复到最后一次 commit 的状态:
git restore [file]

你把文件 add 到了暂存区,后来发现还是不要暂存这个修改,想从暂存区撤销出来（老方法需要两步）
git restore --staged [file] ----> git checkout [file]

恢复删除的文件,这会从暂存区恢复文件到工作区
git restore <deleted-file>

恢复暂存区的指定文件到工作区 [还没 add 到暂存区]
git checkout [file]

恢复某一个时段之前提交的状态到工作区
git checkout [commitId]

撤销所有未被追踪的目录和文件
git clean -dn ---> git clean -df
