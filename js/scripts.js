// Enables horizontal scroll on tables (in conjunction with its CSS counterpart)
// Thank you <https://github.com/ideamean/gitbook-plugin-auto-scroll-table/blob/cae3506409e5a6813a3dc2b36cca097bebd6e114/book/plugin.js>
// Also see original <https://www.npmjs.com/package/gitbook-plugin-auto-scroll-table> by <https://www.npmjs.com/~luchuan.neo>
require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind("page.change", function() {
    [].slice.call(document.querySelectorAll('table')).forEach(function(el){
        var wrapper = document.createElement('div');
        wrapper.className = 'table-area';
        el.parentNode.insertBefore(wrapper, el);
        el.parentNode.removeChild(el);
        wrapper.appendChild(el);
    });
  });
});
