// Union-Find Data Type
// This implementation uses quick find. Initializing a data structure with n sites takes linear time.
// The find, connected, and count operations take constant time but the union operation takes linear time.

function QuickFindUF(N) {
  // dont ever use new Array(), one arg makes the length equal to capacity
  // initialize an empty union-find data structure with sites 0 through n - 1.
  // Each site is initially in its own compnent
  var id = new Array(N); // id[i] = component identifier of i
  var count = N; // number of components
  for (var i = 0; i < N; i++) {
    id[i] = i;
  }

  // returns the number of components
  function count() {
    return count;
  }

  // retusn the component identifier for the component containing site p
  function find(p) {
    return id[p];
  }

  // retusn true if the two sties are in the same component
  function connected(p, q) {
    return id[p] === id[q];
  }

  function union(p, q) {
    var pID = id[p]; // neeeded for correctness
    var qID = id[q]; // to reduce the number of array accesses

    // p and q are already in the same component
    if (pID === qID) return;

    for (var i = 0; i < id.length; i++) if (id[i] === pID) id[i] = qID;
    count--;
  }

  return {
    count,
    find,
    connected,
    union
  };
}

module.exports = QuickFindUF;
