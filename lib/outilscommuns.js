/**
 * Tools that can be shared in both a node and browser environment.
 * Credit to http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/  for the overall sharing technique.
 *
 */
(function(exports) {

    /**
     * A function for efficiently loop through a sparse array.
     * See http://stackoverflow.com/questions/9329446/for-each-in-an-array-how-to-do-that-in-javascript for detailed explanations
     */
    exports.arrayHasOwnIndex = function(array, property) {
	if ((array === null) || (array === undefined)) {
	    return false;
	} else {
	    return array.hasOwnProperty(property) && /^0$|^[1-9]\d*$/.test(property) && property <= 4294967294; // 2^32 - 2;
	}
    }
})(typeof exports === "undefined" ? this["outilscommuns"] = {} : exports);
