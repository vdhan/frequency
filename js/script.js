function _(x)
{
	return document.getElementById(x);
}

function test() {
	var counter = [];
	var i;
	for (i = 0; i < 26; ++i) {
		counter.push(0);
	}

	var s = _('ct').value;
	s = s.toLowerCase().trim();
	var l = s.length;
	for (i = 0; i < l; ++i) {
		var c = s.charCodeAt(i);
		if (97 <= c <= 122) {
			counter[c - 97] += 1;
		}
	}

	for (i = 0; i < 26; ++i) {
		_(i).innerHTML = counter[i];
	}
}