# git note
```
 git学习笔记 new
 git init learning
 git config --global --list
 ls -al
 git config --global user.name 'kelin'
 git config --global user.email '449780270@qq.com'

git add
git add -u

git status
git commit -m'msg'

mv readme readme.md
git add readme.md
git rm readme
git reset --hard清除暂存区
git mv readme readme.md

git log
git log --oneline
git log -n2 --oneline
git log -n4 --oneline

git branch -v 
git branch -av 
git checkout -b temp 66e06919c5d1bdc
git checkout master//切换到master上
git log --all
git log --all --graph
gitk
gitk --all



cp ../LabBigScreen/mainScreen.html  maimScreen.html
cp -r ../LabBigScreen/js .
mkdir css
cp ../LabBigScreen/css/mainScreen.css ./css/mainScreen.css

1、找到需要修改的文件，使用命令：vim  文件名 ，打开需要修改的文件
2、打开文件后，点击键盘的“i”键，然后对文件进行编辑
3、编辑完成后先点击键盘“ESC”随后“shift+：”在显示的输入行中输入“wq”进行保存修改后的文件
4、如果要撤销修改，就将“wq”换位“q”
5、也可以使用“q！”强制退出这个文件
vi mainScreen.css  i  :wq 

git cate-fle -p 9aac56241b
git cate-fle -t 9aac56241b
echo "hello,world">readme
find .git/objects -type f

git diff HEAD HEAD^(HEAD-1)
git branch -D fix_readme
git commit --amend
git rebase

$ git remote add github git@github.com:keling689/lab.git

git branch -d dev2 删除不要的分支
git reset --hard f2cc709dccebaf6af98005f470738a367d21b8b3 工作去指向指定版本
git reset --hard HEAD~1 与git reset --soft HEAD~1 与git reset HEAD~1的区别

强行拉取远程分支--allow-unrelated-histories
删除远程多余分支 git branch -r -d origin/branch_01
删除本地分支 git branch -D branch_01

git stash 将当前工作区的修改暂存起来，就像堆栈一样，可以随时将某一次缓存的修改再重新应用到当前工作区
git stash
git stash pop
git stash list
git show stash@{0}
git stash apply stash@{1}
git stash save "message"

git stash clear
git fsck --lost-found 找回清除掉的stash
dangling commit 7010e.......
git show 7010e..
git merge 7010e....
这样就还原了你git stash drop,git stash clear 的内容
[git stash](https://www.cnblogs.com/yanghaizhou/p/5269899.html)

1、 git clone -b mvvm https://github.com/keling689/daily_note.git 克隆分支
2、Git之右键没有Git Bash Here的解决办法
	1）Win+R 打开运行输入regedit 回车打开注册表

	2）找到[HKEY_CLASSES_ROOT\Directory\Background]。

	3）在[Background]下如果没有[shell],则右键-新建项[shell]。

	4）在[shell]下右键-新建项[Git Bash Here],其值为“Git Bash Here",此为右键菜单显示名称。

		  此时在任意位置鼠标右击就能看到Git Bash Here但是没有关联程序，现在还没有实际作用

	5） 在[Git Bash Here]下右键-新建-项[command],其默认值为 "git安装根目录\bin\bash.exe"

	6）再完善一下添加一个Git的小图标：选中Git Bash Here右击-新建-字符串值，名称为Icon,双击编辑，

		  其值为“git安装根目录\\mingw64\share\git\git-for-windows.ico”。
```	  