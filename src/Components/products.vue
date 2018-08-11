<template>
  <div class="container" >
    <div class="row" >
<h1>To-Do List</h1>
    <!-- <button class="btn btn-primary" @click="fetchProducts()">GetProducts</button> -->
    <table class="table">
      <thead>
        <th>Title</th>
        <th>Status</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="item in arr">
          <td>{{item.Title}}</td>
          <td> <span :class="{doneStatus:item.Status=='done',pendingStatus:item.Status=='pending'}" >{{item.Status}}</span> </td>
          <td>
            <button @click="onDelete(item)" type="button" class="btn btn-default" aria-label="Left Align">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    </div>
    <hr>
    <div class="row" >
      <div class="form-group" >
        <label for="id">Id</label>
        <input type="text" class="form-control" placeholder="Enter Id" v-model="model.Id" >
      </div>
      <div class="form-group" >
        <label for="id">Title</label>
        <input type="text" class="form-control" placeholder="Enter Title" v-model="model.Title" >
      </div>
      <div class="form-group" >
        <label for="id">Status</label>
        <select class="form-control" v-model="model.Status" >
          <option value="done">done</option>
          <option value="pending">pending</option>
        </select>
      </div>
  <div class="form-group" >
    <button class="btn btn-primary" @click="addProduct()" >Add Task</button>
  </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    arr:[],
    model:{
      Id:'',
      Title:'',
      Status:'pending'
    }
  }
},
methods:{
  onDelete(item){
    this.$http.delete(item.Id).then(respone=>{
      console.log(respone);
      this.arr.splice(this.arr.indexOf(item),1);
    },
    error=>{
      console.log(error);
    });
  },
  addProduct(){
    this.$http.post('',this.model)
    .then( respone=>{
      console.log(respone);
      this.arr.push(this.model);
   },
            error=>{
              console.log(error);
            }
        );
  },
  fetchProducts(){
    this.$http.get('')
    .then(response=>{
      console.log(response.json());
      return response.json();
    })
    .then(data=>{
      this.arr=data;
    });
  }
},
beforeMount(){
  this.fetchProducts()
}
}
</script>

<style>
.doneStatus{
  color: blue;
}
.pendingStatus{
  color: red;
}
</style>
