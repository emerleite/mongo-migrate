var migration_info = db.migration_info.findOne();
if (migration_info) {
  migration_info.version = current;
} else {
  migration_info = {_id: new ObjectId(), version: current};
}
db.migration_info.save(migration_info);
