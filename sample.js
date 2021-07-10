new Vue({
    el: '#app',
    data: {
      name: '',
      course: '',
      acceptancePeriod: '',
      lastId: 0,
      students: [

      ]
    },
    methods: {
      addStudent: function() {
        newStudent = {
            id: this.lastId+1,
            name: this.name,
            course: this.course,
            acceptancePeriod: this.acceptancePeriod
        }
        console.log(newStudent)
        this.lastId += 1
        this.students.push(newStudent)
      }
    }
  })