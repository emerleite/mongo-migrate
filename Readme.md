MongoDB migrate
===============
This project aims to be an agnostic migration system for mongodb. Sometimes when you add attributes, you need to give a value for existing documents. Doing this frequently, this tool can help, since it has an  straightforward syntax and simplicity.

Dependencies
------------
MongoDB client - the bin file that comes with mongodb. I will soon create an installation script to make things easier. For now you need to download it from mongodb website. - <http://www.mongodb.org/downloads>

Instalation
-----------
    $ git clone git://github.com/emerleite/mongo-migrate.git
    $ cd mongo-migrate
    $ cp config-sample.cfg config.cfg
    
Edit *config.cfg* with your database information

Usage
-----
Mongo migrate has two options. `generate` and `run`. The syntax is pretty straitforward as explained above:

### Basic information
By convention, mongo migrate uses the directory db/migrate when generating and running migrations. You can change it, by editing the MIGRATION_DIR configuration at config.cfg. See config.sample.cfg for details.

### Configuration
MongoDB migrate uses a configuration file called config.cfg. It has the following options:

*  MONGO_HOST      - The database host. Default is localhost
*  MONGO_DATABASE  - Required. Do not have default value
*  MIGRATION_DIR   - Where to find migrations. Default is ./db/migrate/
*  MONGO_USR       - Username. Default is empty
*  MONGO_PWD       - Password. Default is empty

Note: When you use MONGO_USR and not MONGO_PWD you'll be prompted for password.

### Generate
Mongo migrate generates migrtion in the following format: 

YYYMMDDhhmmssmm_name.js. Ex: 20111209002426_add_person.js

    $ ./mongo_migrate generate [name]

This will generate the following file:

```js
var migration = {
  up: function() {
  
  },
  down: function() {

  }
};

migration[target].call();
```

Put the code for the changes on up and the code for rollback on down.

### Running
Mongo migrate has 2 modes of running. Up and Down. The first make things happen and the second is a rollback. For these 2 modes, we call run one specific migration or all migrations. Mongo migrate controll the current migration, to enable run only the last migrations or just run all.

### One migration
    $ ./mongo_migrate run [name] up
    $ ./mongo_migrate run [name] down

The name can bem the full name or partial name. Ex: 20111209002426_add_person.js or only add_person. Mongo migrate will first look for a full name and after will fallback to find the file based on the partial name.

### All migrations
    $ ./mongo_migrate run up
    $ ./mongo_migrate run down

When running all migrations, mongo migrate will run only the new migrations, because it controls witch is the last one.

To-Do
-----
* see (<https://github.com/emerleite/mongo-migrate/issues>)

Author
------

* Emerson Macedo (<http://codificando.com/>)

License:
--------

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
