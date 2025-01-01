// 実装する関数
export function main(employees:string[], unemployed:string[]): string[] {
  // employeesに対して、fired[i]を含むかチェック
  // 含むならemployeesから弾き出す

  let remainingEmployees: string[] = employees;
  if(unemployed.length > 0) {
    for(let i=0; i<unemployed.length; i++){
      remainingEmployees = employees.filter((employee)=>{
        return employee !== unemployed[i]
      })
      employees = remainingEmployees
    }
  }

  return remainingEmployees
}

// 入力データ（問題ごとに修正）
const data = [
  { employees: ["Steve", "David", "Mike", "Donald", "Lake", "Julian"], unemployed: ["Donald", "Lake"] },
  { employees: ["Donald", "Lake"], unemployed: ["Donald", "Lake"] },
  { employees: ["Steve", "David", "Mike", "Donald", "Lake", "Julian"], unemployed: [] },
  { employees: ["Mike", "Steve", "David", "Mike", "Donald", "Lake", "Julian"], unemployed: ["Mike"] },
  { employees: ["Kailey", "Kailey"], unemployed: ["Kailey"] }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {employees, unemployed} = data[i]
  console.log(`${data[i]}:`, main(employees, unemployed));
}


