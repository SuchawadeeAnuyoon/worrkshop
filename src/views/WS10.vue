<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-right">รายได้ต่อปี</th>
              <th class="text-right">ภาษีที่ต้องจ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.salaryofyear }}</td>
              <td class="text-right">{{ item.tax }}</td>
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
      calsalaty: null
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

        this.calsalaty = e.salaryofyear - 150000
        if (this.calsalaty <= 0) {
            e.tax = 0
        }
        else {
            if (this.calsalaty <= 150000) {
                e.tax = this.calsalaty*0.05
            }
            else {
                this.calsalaty -= 150000
                e.tax = 7500
                if (this.calsalaty <= 200000) {
                    e.tax += (this.calsalaty*0.1)
                }
                else {
                    this.calsalaty -= 200000
                    e.tax = 27500
                    e.tax += this.calsalaty*0.15
                }
            }
        }
      });
    },
  },
};
</script>
