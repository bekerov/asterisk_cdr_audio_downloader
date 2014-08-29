Introduction
============
This script created for working with Asterisk FreePBX CRD and helps listen and download files without Apple Quicktime.

-------------------------------------------------------------------------------

Contact me
==========
If you have any questions, issues, feature requests, or just want to report
your "success story", or maybe even say hi, please send an email to
artur@bekerov.ru


-------------------------------------------------------------------------------

QuickStart
==========
1. Just upload download_asterisk_cdr.js script to your webserver.
2. Create new bookmark in browser and past in URL this text:
javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://yourdomain/download_asterisk_cdr.js';void(0);
3. When you on your FreePBX CDR GUI on page http://yourasterisk.url/admin/config.php?display=cdr click on new bookmark, which we created.
4. If you see Loaded alert all works good.
5. Click on speaker icon and if you see new audio player you can save this audio.
6. PROFIT!!!