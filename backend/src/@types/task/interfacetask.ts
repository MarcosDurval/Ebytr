interface IcreateTask {
  task:string,
}

interface ItaskId extends IcreateTask {
  id:string,
  status:string,
  date:Date
}
