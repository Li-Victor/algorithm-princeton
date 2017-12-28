// Union-Find Data Type
// This implementation uses quick union.
// Initializing a data structure with n sites takes linear time.
// Afterwards, the union, find, and connected operations take linear time (in the worst case) and the count operation takes constant time.
function QuickUnionUF(N) {
  // dont ever use new Array(), one arg makes the length equal to capacity
  // initialize an empty union-find data structure with sites 0 through n - 1.
  // Each site is initially in its own compnent
  var parent = new Array(N); // id[i] = component identifier of i
  var count = N;
  for (var i = 0; i < N; i++) {
    parent[i] = i;
  }

  // retusn the number of components
  function count() {
    return count;
  }

  // returns the component identifier for the component containing site p
  function find(p) {
    while (p !== parent[p]) p = parent[p];
    return p;
  }

  // returns  true if the two sites are in the same component.
  function connected(p, q) {
    return find(p) === find(q);
  }

  // mergers the component containing site p with the component containing site q
  function union(p, q) {
    var rootP = find(p);
    var rootQ = find(q);
    if (rootP === rootQ) return;
    parent[rootP] = rootQ;
    count--;
  }

  return {
    count,
    find,
    connected,
    union
  };
}

module.exports = QuickUnionUF;
