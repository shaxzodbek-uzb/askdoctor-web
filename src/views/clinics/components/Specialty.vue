<template>
  <!-- <div> -->
  <aside class="col-md-3">
    <div class="card sidebar-filter">
      <div class="card-body">
        <h5 class="title">По специальности</h5>
        <!-- <input type="text" :value='msg1' name=""> -->
        <label
          class="item-filter custom-control custom-checkbox"
          v-for="item in doctors"
          :key="item.id"
        >
          <input
            type="checkbox"
            :checked="item.chec"
            :id="'checkbox' + item.id"
            :data-doctor_id="item.id"
            class="custom-control-input checkbox"
            @click="click(item.id)"
          />
          <span class="custom-control-label">{{ item.title }}</span>
        </label>

        <a class="btn btn-sm btn-light" @click="clear">Сброс</a>
      </div>
      <!-- card-body.// -->
    </div>
    <!-- card card-body.// -->
  </aside>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["msg1"],
  data() {
    return {
      val: "asdsad",
      doctors: [],
      checkedlar: [],
    };
  },
  mounted() {
    console.log("Component mounted.");
    this.massiv();
    this.defaultclick();
  },
  methods: {
    massiv() {
      this.doctors = JSON.parse(`[
{"chec":"checked","title" : "Педиатр","id":"1"},
{"chec":"","title" : "Маммолог","id":"2"},
{"chec":"","title" : "Семейный психолог","id":"3"},
{"chec":"","title" : "Уролог","id":"4"},
{"chec":"","title" : "Эндоуролог","id":"5"},
{"chec":"","title" : "Гепатолог","id":"6"},
{"chec":"","title" : "Гепатолог","id":"7"},
{"chec":"","title" : "Детский невролог","id":"8"},
{"chec":"","title" : "Педиатр","id":"9"},
{"chec":"","title" : "Маммолог","id":"10"},
{"chec":"","title" : "Уролог","id":"11"},
{"chec":"","title" : "Педиатр","id":"12"},
{"chec":"","title" : "Маммолог","id":"13"},
{"chec":"","title" : "Семейный психолог","id":"14"},
{"chec":"","title" : "Уролог","id":"15"},
{"chec":"","title" : "Эндоуролог","id":"16"},
{"chec":"","title" : "Гепатолог","id":"17"},
{"chec":"","title" : "Гепатолог","id":"18"},
{"chec":"","title" : "Детский невролог","id":"19"},
{"chec":"","title" : "Педиатр","id":"20"},
{"chec":"","title" : "Маммолог","id":"21"},
{"chec":"","title" : "Уролог","id":"22"}
]`);
    },
    // chertilganda idlarni uzatish
    click(id) {
      this.checkedlar = [id];
      // let list = $(".checkbox");
      // for (var i = list.length - 1; i >= 0; i--) {
      //   let it = list[i];
      //   if ($(it).is(":checked")) {
      //     this.checkedlar.push($(it).data("doctor_id"));
      //   }
      // }
      this.$emit("qoshish", this.checkedlar);
    },
    // Tozalash function ni
    clear() {
      // $(".checkbox").attr("checked", false);
      // for (var i = 0; i < this.doctors.length; i++) {
      //   this.checkedlar.push(parseInt(this.doctors[i]["id"]));
      // }
      // this.checkedlar = []
      this.$emit("qoshish", this.checkedlar);
    },
    // default qiymatlar
    defaultclick() {
      for (var i = 0; i < this.doctors.length; i++) {
        if (this.doctors[i]["chec"] !== "") {
          this.checkedlar.push(parseInt(this.doctors[i]["id"]));
        }
      }
      this.$emit("qoshish", this.checkedlar);
    },
  },
};
</script>
