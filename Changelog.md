0.5.0 / 2011-12-13
==================
  * Added option to pass config file path by parameter - Issue #8
  * Changed the command-line argument interface (using optargs)
  * Improved documentation

0.4.1 / 2011-12-13
==================
  * Fixed all_down to use the current migration logic

0.4.0 / 2011-12-13
==================
  * Current logic now uses migration_info collection and version attribute to manage state

0.3.0 / 2011-12-09
==================
  * Authentication support via MONGO_USR and MONGO_PWD at config.cfg
  * Allow user to only use MONGO_USR and require password when running the migration
0.2.0 / 2011-12-09
==================
  * runall now is only run without name
  * Improved docs (Douglas Campos - qmx)

0.1.0 / 2011-12-09
==================
  * Can run individual migration (up and down)
  * Can run all migrations at once (up and down)
  * Controll the current migration
  * Initial version
