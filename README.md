Adding RebelCMS to Windows Azure couldn't be simpler.
===============

 - Create a Windows Azure account and add a new "Website with database" (more help [here](https://www.windowsazure.com/en-us/develop/net/tutorials/web-site-with-sql-database/) in section "Create a web site and a SQL database in Windows Azure")
 - Copy the connection string of your new website and keep it somewhere (eg. a new notepad instance)
 - In the "Deployment" section, Enable Git publishing and note down the Git URL after set-up.
 - Clone [this](https://github.com/RebelCMS/RebelCmsV1WebApp.git) git repository to your local machine
 - Add the Git URL in 3 with the command "git remote add azure [giturl]"
 - Execute command "Git push azure master" (you will receive deployment successful message after a min or two)
 - Go to your Azure Website instance url and setup RebelCMS with the connectionstring you copied in 2 (remember to add the password to the connstring)

Thats it! Now you can make file changes and commit and push to Azure in seconds!

Feedback
 - Follow us on Twitter: [@rebel_cms](http://twitter.com/rebel_cms)
 - Email us at: info@rebelcms.com