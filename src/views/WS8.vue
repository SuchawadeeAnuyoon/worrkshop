<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-right">เงินเดือน</th>
              <th class="text-right">ประกันสังคม</th>
              <th class="text-right">เงินกองทุน</th>
              <th class="text-right">เงินเดือนสุทธิ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.salary }}</td>
              <td class="text-right">{{ item.fee }}</td>
              <td class="text-right">{{ item.fund }}</td>
              <td class="text-right">{{ item.balanceoffund }}</td>
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
        e.balance = e.salary - fee + e.bonus;
        e.deduction = e.salary - fee;
        if (e.name == "นาย A" || e.name == "นาย C" || e.name == "นาย E") {
          e.fund = 0;
        } else {
          e.fund = e.deduction * 0.05;
        }

        e.balanceoffund = e.salary - e.fee - e.fund;
      });
    },
  },
};
</script>
