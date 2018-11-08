
new Vue({
  el: '#app',
  data:{
    hola:"mundo",
    graph: null,
    arr1: ['data1', 30, 200, 100, 400, 150, 250],
    arr2: ['data2', 50, 20, 10, 40, 15, 25],
    arr3: ['data3', 1,2,3,4,5,6],
    arrays: [],
    closed: true,
    currencies: ["MXN » USD","MXN » EUR","MXN » CAD","MXN » BTC"],

  },
  methods: {
    toggleNav() {
      if(this.closed){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("chart").style.marginLeft = "250px";
        this.closed = !this.closed
      }
      else{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("chart").style.marginLeft = "0";
        this.closed = !this.closed
      }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    },
    fetchData(){

    },
    appendToArr(){
      this.arr1.push(this.getRandomInt(0,1000))
      this.arr2.push(this.getRandomInt(0,1000))
      this.arr3.push(this.getRandomInt(0,1000))
      this.graph.load({
        columns: [this.arr1,this.arr2,this.arr3]
      })
    }
  },
  created(){
    this.arrays.push(this.arr1)
    this.arrays.push(this.arr2)
    this.arrays.push(this.arr3)
    this.graph = c3.generate({
      bindto: '#chart',
      data: {
        columns: this.arrays
      }
    });
    
  }
})


//APY KEY FIXER: faf2fdca5a7b9031904faf3606788f33
//base url: http://data.fixer.io/api/


