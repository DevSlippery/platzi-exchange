import vueNumeralFilterInstaller from "vue-numeral-filter";

const dollarFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  return (vueNumeralFilterInstaller.format.value = "($ (0,00a))");
};

const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
