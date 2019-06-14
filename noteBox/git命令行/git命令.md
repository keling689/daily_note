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