<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-right">เงินเดือนต่อปี</th>
              <th class="text-right">เงินเดือนสุทธิ</th>
              <th class="text-right">% เสียภาษีต่อปี</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.salary*12 }}</td>
              <td class="text-right">{{ item.salaryofyear }}</td>
              <td class="text-right">{{ item.percenttax }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  </v-app>
</template>
<script>
import data_employee from "../plugins/data";
export default {
  data() {
    return {
      employee: data_employee.employee,
    };
  },
  mounted() {
    this.calculate();
  },
  methods: {
    calculate() {
      let fee = null;

      this.employee.forEach((e) => {
        if (e.salary < 15000) {
          fee = e.salary * 0.05;
        } else {
          fee = 15000 * 0.05;
        }
        e.bonus = e.salary * 0.5;
        e.fee = fee;
        e.deduction = e.salary - fee;
        e.salaryofyear = e.deduction*12;
        if(e.salaryofyear <= 150000){
            e.percenttax = "0%"
        }else if(e.salaryofyear > 150000 && e.salaryofyear <= 300000){
            e.percenttax ="5%"
        }else if(e.salaryofyear > 300000 && e.salaryofyear <= 500000){
            e.percenttax ="10%"
        }else{
            e.percenttax = "15%"
        }
      });
    },
  },
};
</script>
