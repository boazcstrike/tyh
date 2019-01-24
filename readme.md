
# T-rex Entertainment Website
## Install

1) Run in your terminal:

``` bash
composer install
```

2) Set your database information in your .env file (use the .env.example as an example);
3) Create a database in mySQL with the same name as the specified database in .env

3) Run in your trex folder:
``` bash
composer install
php artisan key:generate
php artisan migrate:fresh
php artisan serve
```

## Front end
Source: Laravel Mix (Compiling Software) [https://laravel.com/docs/5.6/mix](https://laravel.com/docs/5.6/mix)

###### Make sure to have the latest version of node and npm installed otherwise you will get errors.

1) Install dependencies and tasks
``` bash
npm install
npm run dev
```

2) Run on live refresh
``` bash
npm run watch
```

3) Optional: 
###### Personalized scss file
The sass method allows you to compile Sass into CSS. You may use the method like so:
```
mix.sass('resources/assets/sass/app.scss', 'public/css');
```
or 
```
mix.sass('resources/assets/sass/app.sass', 'public/css')
   .sass('resources/assets/sass/admin.sass', 'public/css/admin');
```

###### URL Processing
Because Laravel Mix is built on top of Webpack, it's important to understand a few Webpack concepts. For CSS compilation, Webpack will rewrite and optimize any url() calls within your stylesheets. While this might initially sound strange, it's an incredibly powerful piece of functionality. Imagine that we want to compile Sass that includes a relative URL to an image:
```
.example {
    background: url('../images/example.png');
}
```

###### Source Maps
Though disabled by default, source maps may be activated by calling the mix.sourceMaps() method in your webpack.mix.js file. Though it comes with a compile/performance cost, this will provide extra debugging information to your browser's developer tools when using compiled assets.
```
mix.js('resources/assets/js/app.js', 'public/js')
   .sourceMaps();
```

###### Vanilla JS
Similar to combining stylesheets with mix.styles(), you may also combine and minify any number of JavaScript files with the scripts() method:
```
mix.scripts([
    'public/js/admin.js',
    'public/js/dashboard.js'
], 'public/js/all.js');
```

###### Vendor Extraction
One potential downside to bundling all application-specific JavaScript with your vendor libraries is that it makes long-term caching more difficult. For example, a single update to your application code will force the browser to re-download all of your vendor libraries even if they haven't changed.

If you intend to make frequent updates to your application's JavaScript, you should consider extracting all of your vendor libraries into their own file. This way, a change to your application code will not affect the caching of your large vendor.js file. Mix's extract method makes this a breeze:
```
mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue'])
```
The extract method accepts an array of all libraries or modules that you wish to extract into a  vendor.js file. Using the above snippet as an example, Mix will generate the following files:

public/js/manifest.js: The Webpack manifest runtime
public/js/vendor.js: Your vendor libraries
public/js/app.js: Your application code
To avoid JavaScript errors, be sure to load these files in the proper order:
```
<script src="/js/manifest.js"></script>
<script src="/js/vendor.js"></script>
<script src="/js/app.js"></script>
```

## Errors
Laravel 5.4 made a change to the default database character set, and it’s now utf8mb4 which includes support for storing emojis. This only affects new applications and as long as you are running MySQL v5.7.7 and higher you do not need to do anything.

For those running MariaDB or older versions of MySQL you may hit this error when trying to run migrations:
```
[Illuminate\Database\QueryException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes (SQL: alter table users add unique users_email_unique(email))

[PDOException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes
```

As outlined in the Migrations [guide](https://laravel.com/docs/master/migrations#creating-indexes) to fix this all you have to do is edit your AppServiceProvider.php file and inside the boot method set a default string length:
```
use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}
```

After that everything should work as normal. If you enjoyed this post be sure and join the weekly [Laravel newsletter](https://laravel-news.com/newsletter) and never miss out on new releases, framework tips, and new tutorials.

Source: https://laravel-news.com/laravel-5-4-key-too-long-error

## Change log

Please save any major updates here [CHANGELOG](readme.md)


###### Oct 1, 2018
* Complete front end stuff.
    - fonts***
    - images
    - fix navbar
    - fix margins and paddings in about
    - fix spacings for coming soon
    - fix colors - some colors are still in laravel

* news to user relationship on progress
* home, about and history CMS under dev, finish frontend firsttt!!
* downgraded package for bluehost
* upgraded various packages
* artist under maintenance, user authentication required to see
* category select list output


###### September 23, 2018
* Added related media to films and artists.
* Fixed background sizing for stretched images.
* Errors Encountered:
    - image overlay upload for artists not working. (Not stored to database)

###### September 20, 2018
* Fixed Films index and individual page to reflect model changes.
* Errors Encountered:
    - image upload for artists not working
    - article short content input field missing

###### Sun Jun 18 20:11:06 CST 2018
* coverted to 5.5
    - migrated backend
    - migrated migrations
* packages reinstalled

###### Thu Jun 14 19:15:21 CST 2018
* added backpack packages
    - Backpack Base and CRUD
    - Settings
    - PageManager
    - PermissionManager
    - MenuCRUD
    - NewsCRUD

###### Thu Jun 14 17:37:47 CST 2018
* added test branch
    - mainly for the purpose of testing composer packages

###### Thu Jun 14 01:29:42 CST 2018
* added dev branch



