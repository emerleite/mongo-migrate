var migration_info = db.migration_info.findOne();
if (migration_info) {
  print(migration_info.version);
} else {
  print(0);
}
