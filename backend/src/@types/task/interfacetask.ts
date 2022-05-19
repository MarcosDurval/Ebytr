interface IcreateTask {
  title:string
  task:string,
}

interface ItaskId extends IcreateTask {
  id:string,
  status:string,
  date:Date
}
