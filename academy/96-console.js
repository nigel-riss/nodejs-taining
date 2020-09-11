'use strict';

const sum = (a, b) => {
  const result = a + b;
  return result;
};

const good = sum(2, 5); // 7
const bad = sum(2, `a`); // ?

// restart - перезапускает отладку сценария;
// kill - прерывает выполнение сценария;
// watch(expression) - добавляет выражение в список отслеживаемых;
// unwatch(expression) - удаляет выражение из списка отслеживаемых;
// list (n) - выводит n-строк текущего модуля;
// clearBreakpoint(<script_name>, <line_number>) - снять брекпоинт в сценарии <script_name> со строки <line_number>;
