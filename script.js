document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", e => e.preventDefault());
});

document.getElementById("new-compound").addEventListener("keypress", e => {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = e.target.value.trim();
    document.getElementById("compound-list").appendChild(li);
    e.target.value = "";
  }
});

document.getElementById("new-primary").addEventListener("keypress", e => {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = e.target.value.trim();
    document.getElementById("primary-list").appendChild(li);
    e.target.value = "";
  }
});

document.getElementById("new-symbolic").addEventListener("keypress", e => {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    const ns1 = document.getElementById("ns1").value;
    const ns2 = document.getElementById("ns2").value;
    const ns3 = document.getElementById("ns3").value;
    const rule = document.getElementById("natual-deduction-rule").value;

    const li = document.createElement("li");
    li.textContent = `${e.target.value.trim()} (${ns1} ${ns2} ${ns3}) [${rule}]`;
    document.getElementById("symbolic-list").appendChild(li);

    e.target.value = "";
    document.getElementById("ns1").value = "";
    document.getElementById("ns2").value = "";
    document.getElementById("ns3").value = "";
  }
});
