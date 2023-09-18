let currentStartIndex = 0;
const pageSize = 5;
const dtmToday = new Date(2023, 3, 12);
const employeeList = [
    new EmployeeData("BDI-001", "Ethan Thompson", new Date(2006,10,23)),
        new EmployeeData("BDI-002", "Ava Williams", new Date(2010-11-26)),
        new EmployeeData("BDI-003", "Benjamin Davis", new Date(2007, 10, 24)),
       new EmployeeData("BDI-004", "Olivia Martinez", new Date(2002, 7, 19)),
        new EmployeeData("BDI-005", "Liam Garcia", new Date(1998, 6, 16)),
        new EmployeeData("BDI-006", "Mia Smith", new Date(1996, 5, 14)),
        new EmployeeData("BDI-007", "Samuel Johnson", new Date(2010, 10, 26)),
        new EmployeeData("BDI-008", "Sophia Harris", new Date(2004, 8, 21)),
        new EmployeeData("BDI-009", "Daniel Lee", new Date(1982, 0, 2)),
        new EmployeeData("BDI-010", "Charlotte Turner", new Date(2003, 8, 20)),
        new EmployeeData("BDI-011", "Henry Martin", new Date(1994, 4, 13)),
        new EmployeeData("BDI-012", "Amelia Lewis", new Date(1985, 1, 5)),
       new EmployeeData("BDI-013", "Jackson Robinson", new Date(1981, 0, 2)),
    new EmployeeData("BDI-014", "Harper Clark", new Date(1996, 5, 15)),
    new EmployeeData("BDI-015", "Lucas King", new Date(1984, 1, 5)),
    new EmployeeData("BDI-016", "Evelyn Hall", new Date(2004, 8, 21)),
    new EmployeeData("BDI-017", "Alexander Young", new Date(1986, 2, 6)),
    new EmployeeData("BDI-018", "Grace Turner", new Date(1980, 0, 1)),
    new EmployeeData("BDI-019", "William Adams", new Date(2004, 8, 21)),
    new EmployeeData("BDI-020", "Victoria Baker", new Date(2006, 9, 23)),
    new EmployeeData("BDI-021", "James Hall", new Date(1996, 5, 15)),
    new EmployeeData("BDI-022", "Zoe Lewis", new Date(2010, 10, 27)),
    new EmployeeData("BDI-023", "Benjamin Reed", new Date(1990, 3, 10)),
        
 new EmployeeData("BDI-024", "Mia Collins", new Date(1997, 7, 16)),
        new EmployeeData("BDI-025", "Samuel White", new Date(1990, 4, 9)),
        new EmployeeData("BDI-026", "Ava Phillips", new Date(1980,1,1)),
        new EmployeeData("BDI-027", "David Rodriguez", new Date(1986,3,6)),
        new EmployeeData("BDI-028", "Lily Green", new Date(1980,1,1)),
        new EmployeeData("BDI-029", "Henry Turner", new Date(2010, 11, 26)),
        new EmployeeData("BDI-030", "Chloe Smith", new Date(2000, 8, 18)),
        new EmployeeData("BDI-031", "Michael Campbell", new Date(2004, 9, 21)),
        new EmployeeData("BDI-032", "Emily Anderson", new Date(2011, 11, 27)),
        new EmployeeData("BDI-033", "John Hernandez", new Date(2006, 10, 23)),
        new EmployeeData("BDI-034", "Abigail Scott", new Date(2008, 10, 25)),
        new EmployeeData("BDI-035", "Daniel Perez", new Date(1998, 7, 16)),
        new EmployeeData("BDI-036", "Ella Collins", new Date(1990, 4, 9)),
        new EmployeeData("BDI-037", "Matthew Sanchez", new Date(1981, 1, 2)),
        new EmployeeData("BDI-038", "Scarlett Taylor", new Date(1995, 6, 13)),
        new EmployeeData("BDI-039", "Samuel Mitchell", new Date(1996, 5, 14)),
new EmployeeData("BDI-040", "Sophia Nelson", new Date(2008, 9, 25)),
new EmployeeData("BDI-041", "David Brown", new Date(2005, 8, 22)),
new EmployeeData("BDI-042", "Harper Johnson", new Date(2004, 8, 21)),
new EmployeeData("BDI-043", "Christopher Ross", new Date(2006, 8, 22)),
new EmployeeData("BDI-044", "Amelia Moore", new Date(1993, 4, 12)),
new EmployeeData("BDI-045", "Logan Mitchell", new Date(1991, 4, 10)),
new EmployeeData("BDI-046", "Elizabeth Cooper", new Date(1983, 1, 3)),
new EmployeeData("BDI-047", "Andrew Foster", new Date(1994, 5, 13)),
new EmployeeData("BDI-048", "Madison Turner", new Date(1996, 5, 14)),
new EmployeeData("BDI-049", "Benjamin Flores", new Date(1997, 6, 15)),
new EmployeeData("BDI-050", "Penelope Butler", new Date(2005, 8, 22)),
new EmployeeData("BDI-051", "Samuel Scott", new Date(1997, 6, 16)),
new EmployeeData("BDI-052", "Emily Nelson", new Date(1999, 6, 17)),
new EmployeeData("BDI-053", "Joseph Rivera", new Date(1993, 4, 12)),
new EmployeeData("BDI-054", "Avery Turner", new Date(1985, 1, 5)),
new EmployeeData("BDI-055", "William Cox", new Date(1996, 5, 15)),
new EmployeeData("BDI-056", "Sofia Garcia", new Date(2007, 9, 24)),
new EmployeeData("BDI-057", "Ethan Baker", new Date(1999, 6, 17)),
new EmployeeData("BDI-058", "Grace Adams", new Date(1989, 3, 8)),
new EmployeeData("BDI-059", "Daniel Coleman", new Date(1991, 4, 10)),
new EmployeeData("BDI-060", "Harper Jenkins", new Date(1997, 6, 16)),
new EmployeeData("BDI-061", "Aiden Phillips", new Date(1989, 3, 9)),
new EmployeeData("BDI-062", "Mia Turner", new Date(2009, 10, 26)),
new EmployeeData("BDI-063", "Benjamin Lewis", new Date(2005, 8, 22)),
new EmployeeData("BDI-064", "Chloe Martinez", new Date(1993, 4, 12)),
new EmployeeData("BDI-065", "Samuel Adams", new Date(2011, 10, 27)),
new EmployeeData("BDI-066", "Lily Turner", new Date(1994, 5, 13)),
new EmployeeData("BDI-067", "Alexander Peterson", new Date(1990, 3, 10)),
new EmployeeData("BDI-068", "Amelia Reed", new Date(1984, 1, 5)),
new EmployeeData("BDI-069", "Michael White", new Date(2010, 10, 26)),
new EmployeeData("BDI-070", "Olivia Turner", new Date(2006, 10, 23)),
new EmployeeData("BDI-071", "James Hernandez", new Date(2002, 8, 19)),
new EmployeeData("BDI-072", "Zoe Anderson", new Date(2003, 9, 20)),
new EmployeeData("BDI-073", "William Collins", new Date(1996, 6, 14)),
new EmployeeData("BDI-074", "Emily Roberts", new Date(2007, 10, 24)),
new EmployeeData("BDI-075", "Jackson Lewis", new Date(1980, 1, 1)),
new EmployeeData("BDI-076", "Grace Carter", new Date(2004, 9, 21)),
new EmployeeData("BDI-077", "David Martinez", new Date(1984, 2, 5)),
new EmployeeData("BDI-078", "Ava Reed", new Date(2008, 10, 25)),
new EmployeeData("BDI-079", "Henry Thompson", new Date(1986, 3, 6)),
new EmployeeData("BDI-080", "Sophia Turner", new Date(1987, 3, 7)),
new EmployeeData("BDI-081", "Christopher Lee", new Date(1997, 7, 16)),
new EmployeeData("BDI-082", "Charlotte King", new Date(2002, 8, 19)),
new EmployeeData("BDI-083", "Samuel Campbell", new Date(1995, 6, 13)),
new EmployeeData("BDI-084", "Harper Turner", new Date(1984, 2, 5)),
new EmployeeData("BDI-085", "Benjamin Wright", new Date(1983, 2, 3)),
new EmployeeData("BDI-086", "Mia Davis", new Date(1985, 2, 5)),
new EmployeeData("BDI-087", "Michael Turner", new Date(1998, 7, 16)),
new EmployeeData("BDI-088", "Elizabeth Hall", new Date(2001, 8, 18)),
new EmployeeData("BDI-089", "Ethan Green", new Date(1992, 5, 11)),
new EmployeeData("BDI-090", "Lily Martinez", new Date(2002, 8, 19)),
new EmployeeData("BDI-091", "Alexander Scott", new Date(2002, 8, 20)),
new EmployeeData("BDI-092", "Abigail Turner", new Date(2004, 9, 21)),
new EmployeeData("BDI-093", "Daniel Adams", new Date(1983, 2, 4)),
new EmployeeData("BDI-094", "Grace Johnson", new Date(2010, 11, 26)),
new EmployeeData("BDI-095", "William Turner", new Date(1998, 7, 16)),
new EmployeeData("BDI-096", "Mia Moore", new Date(2007, 10, 24)),
new EmployeeData("BDI-097", "James Johnson", new Date(2010, 11, 26)),
new EmployeeData("BDI-098", "Zoe White", new Date(1992, 5, 11)),
new EmployeeData("BDI-099", "Samuel Smith", new Date(1994, 6, 13)),
new EmployeeData("BDI-100", "Emily Turner", new Date(2008, 10, 25)),
new EmployeeData("BDI-101", "Benjamin Mitchell", new Date(2004, 9, 21)),
new EmployeeData("BDI-102", "Ava Turner", new Date(1989, 4, 9 )),
new EmployeeData("BDI-103", "Christopher Turner", new Date(1997, 7, 16)),
new EmployeeData("BDI-104", "Sophia Davis", new Date(2003,8 ,20)),
new EmployeeData("BDI-105", "David Scott",  new Date(1983-2, 3)),
new EmployeeData("BDI-106", "Harper Martinez", new Date(2006,10 -23)),
new EmployeeData("BDI-107", "Henry Turner", new Date(1982,2,3)),
new EmployeeData("BDI-108", "Olivia Adams", new Date(1997,7,16)),
new EmployeeData("BDI-109", "Alexander Reed", new Date(1984, 2, 4)),
new EmployeeData("BDI-110", "Amelia Turner", new Date(2004, 9, 21)),
new EmployeeData("BDI-111", "Samuel Turner", new Date(2002, 8, 20)),
 new EmployeeData("BDI-112", "Grace Hernandez", new Date(2003, 8, 20)),
 new EmployeeData("BDI-113", "Michael Collins", new Date(1983, 2, 3)),
 new EmployeeData("BDI-114", "Mia Turner", new Date(1984, 2, 4)),
 new EmployeeData("BDI-115", "Benjamin Turner", new Date(1980, 1, 1)),
 new EmployeeData("BDI-116", "Emily Martin", new Date(1999, 7, 17)),
 new EmployeeData("BDI-117", "William Nelson", new Date(1994, 6, 13)),
 new EmployeeData("BDI-118", "Ava Anderson", new Date(2000, 8, 18)),
 new EmployeeData("BDI-119", "James Turner", new Date(1990, 4, 9)),
 new EmployeeData("BDI-120", "Charlotte Lewis", new Date(2005, 9, 22)),
 new EmployeeData("BDI-121", "Samuel Garcia", new Date(2008, 10, 25)),
 new EmployeeData("BDI-122", "Olivia Carter", new Date(2001, 8, 19)),
 new EmployeeData("BDI-123", "Alexander Turner", new Date(2004, 9, 21)),
];

function EmployeeData(szId, szName, dtmBirthday) {
    this.szId = szId;
    this.szName = szName;
    this.dtmBirthday = dtmBirthday;
}

function btnFirst_Click() {
    currentStartIndex = 0;
    displayData();
}

function btnPrevious_Click() {
    currentStartIndex = Math.max(0, currentStartIndex - 1);
    displayData();
}

function btnPreviousPage_Click() {
    currentStartIndex = Math.max(0, currentStartIndex - pageSize);
    displayData();
}

function btnNext_Click() {
    currentStartIndex = Math.min(employeeList.length - pageSize, currentStartIndex + 1);
    displayData();
}

function btnNextPage_Click() {
    currentStartIndex = Math.min(employeeList.length - pageSize, currentStartIndex + pageSize);
    displayData();
}

function btnLast_Click() {
    currentStartIndex = Math.max(0, employeeList.length - pageSize);
    displayData();
}

function displayData() {
    const employeeDataDiv = document.getElementById('employeeData');
    employeeDataDiv.innerHTML = '';
    const endIndex = Math.min(currentStartIndex + pageSize, employeeList.length);

    for (let i = currentStartIndex; i < endIndex; i++) {
        let employee = employeeList[i];
        let employeeRow = document.createElement('div');
        employeeRow.className = 'employee-row';

        let lblNo = document.createElement('span');
        lblNo.textContent = i + 1;

        let lblId = document.createElement('span');
        lblId.textContent = employee.szId;

        let lblName = document.createElement('span');
        lblName.textContent = employee.szName;

        let lblBirthday = document.createElement('span');
        lblBirthday.textContent = employee.dtmBirthday.toISOString().split('T')[0];

        let age = dtmToday.getFullYear() - employee.dtmBirthday.getFullYear();
        let lblAge = document.createElement('span');
        lblAge.textContent = age;

        employeeRow.appendChild(lblNo);
        employeeRow.appendChild(lblId);
        employeeRow.appendChild(lblName);
        employeeRow.appendChild(lblBirthday);
        employeeRow.appendChild(lblAge);

        employeeDataDiv.appendChild(employeeRow);
    }
}


btnFirst_Click();
