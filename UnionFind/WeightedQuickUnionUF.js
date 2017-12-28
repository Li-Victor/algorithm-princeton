// Union-Find Data Type
// This implementation uses weighted quick union by size (without path compression).
// Initializing a data structure with n sites takes linear time.
// Afterwards, the union, find, and connected operations take logarithmic time (in the worst case)
// and the coutn operation takes constant time
function WeightedQuickUnionUF(N) {
  // initializes an empty union-find data structure with n sites 0 through n - 1.
  var parent = new Array(N);
  var size = new Array(N);
  for (var i = 0; i < N; i++) {
    parent[i] = i;
    size[i] = 1;
  }
  var count = N;

  // retuns the number of components
  function count() {
    return count;
  }

  // returns the component identifier for the component containing site p
  function find(p) {
    while (p !== parent[p]) p = parent[p];
    return p;
  }

  // returns true if the two two sites are in the same component.
  function connected(p, q) {
    return find(p) === find(q);
  }

  // merges the component containing site p with the component containing site q
  function union(p, q) {
    var rootP = find(p);
    var rootQ = find(q);
    if (rootP === rootQ) return;

    // make smaller root point to the larger one
    if (size[rootP] < size[rootQ]) {
      parent[rootP] = rootQ;
      size[rootQ] += size[rootP];
    } else {
      parent[rootQ] = rootP;
      size[rootP] += size[rootQ];
    }
    count--;
  }

  return {
    count,
    find,
    connected,
    union
  };
}

module.exports = WeightedQuickUnionUF;
