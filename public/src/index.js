class TreeNode {
  constructor(type, name, modified, size, children) {
    this.type = type;
    this.name = name;
    this.modified = modified;
    this.size = size;
    this.children = [];
  }
  getNodeByName(name) {
    if (this.name === name) {
      return this;
    } else {
      return;
    }
  }
}

let mainNode;

function constructTreeNodes(currNode, node) {
  console.log(node);
  // base/exit condition ????
  currNode = new TreeNode(node.type, node.name, node.modified, node.size);

  if (node.children.length) {
    for (var i = 0; i < node.children.length; i++) {
      // This has to recursively call the entire tree nodes and build an identical tree structure with TreeNode interface
      // constructTreeNodes(node.children[i], node.children[i]);
      // currNode.children.push(node.children[i]);
    }
  }
  console.log(currNode);
}

fetch("/data")
  .then((res) => res.json())
  .then((data) => {
    constructTreeNodes(mainNode, data[0]);
  })
  .catch((err) => {
    console.log(err);
  });

// const index = new TreeNode("file", "Index.js", "08-15-2022", "8kb");
// const indexHTML = new TreeNode("file", "Index.html", "08-15-2022", "8kb");
// const node_dependencies = new TreeNode(
//   "file",
//   "node_dependencies.js",
//   "08-15-2022",
//   "8kb"
// );
// const File = new TreeNode("file", "File.js", "08-15-2022", "8kb");
// const components = new TreeNode("folder", "Components", "08-15-2022", "8kb");
// const assets = new TreeNode("folder", "Assets", "08-15-2022", "8kb");
// const yaml = new TreeNode("folder", "Yaml", "08-15-2022", "8kb");
// const babel = new TreeNode("folder", "Babel", "08-15-2022", "8kb");
// const button = new TreeNode("file", "Button.js", "08-15-2022", "8kb");
// const src = new TreeNode(
//   "folder",
//   "Src",
//   "08-16-2022",
//   "4kb",
//   components,
//   assets
// );
// const publicFolder = new TreeNode(
//   "folder",
//   "PublicFolder",
//   "08-16-2022",
//   "4kb",
//   index
// );
// const node_modules_folder = new TreeNode(
//   "folder",
//   "node_modules",
//   "08-16-2022",
//   "4kb",
//   node_dependencies,
//   yaml,
//   babel
// );
// const rootFolder = new TreeNode(
//   "folder",
//   "Main",
//   "08-17-2022",
//   "3Mb",
//   publicFolder
// );
// publicFolder.children.push(index);
// publicFolder.children.push(indexHTML);
// node_modules_folder.children.push(node_dependencies);
// node_modules_folder.children.push(yaml);
// node_modules_folder.children.push(babel);
// rootFolder.children.push(node_modules_folder);
// rootFolder.children.push(publicFolder);
// rootFolder.children.push(File);
// rootFolder.children.push(src);
// src.children.push(components);
// src.children.push(assets);
// components.children.push(button);

// function searchTree(node, searchNodeName) {
//   if (node.name === searchNodeName) {
//     return node;
//   } else if (node.children != null) {
//     var i;
//     var result = null;
//     for (i = 0; result == null && i < node.children.length; i++) {
//       result = searchTree(node.children[i], searchNodeName);
//     }
//     return result;
//   }
//   return null;
// }

// const renderRightSidePane = (resultSearchTree) => {
//   const interestedField = new Set(["name", "modified", "size"]);
//   for (let i = 0; i < resultSearchTree.children?.length; i++) {
//     var tableRow = document.createElement("tr");
//     let tableDupRow = "";
//     Object.keys(resultSearchTree.children[i]).map((key) => {
//       if (interestedField.has(key)) {
//         if (key === "name") {
//           if (resultSearchTree.children[i].type === "folder") {
//             tableDupRow +=
//               '<td class="rowName">' +
//               '<img class="folderSVG" src="./Icons/Folder.svg" />' +
//               resultSearchTree.children[i].name +
//               "</td>";
//           } else {
//             tableDupRow +=
//               '<td class="rowName">' +
//               '<img class="fileSVG" src="./Icons/File.svg" />' +
//               resultSearchTree.children[i].name +
//               "</td>";
//           }
//         }
//         if (key === "modified") {
//           tableDupRow +=
//             "<td>" + resultSearchTree.children[i].modified + "</td>";
//         }
//         if (key === "size") {
//           tableDupRow += "<td>" + resultSearchTree.children[i].size + "</td>";
//         }
//       }
//     });
//     tableRow.innerHTML = tableDupRow;
//     document.querySelector(".tableContent")?.appendChild(tableRow);
//   }
// };

// const renderLeftSidePane = (data, listElement) => {
//   if (!data) return null;
//   var list = document.createElement("ul");
//   list.classList.add("unorrdered");
//   if (data.name) {
//     if (data.type === "folder") {
//       const folderIcon = document.createElement("img");
//       folderIcon.classList.add("folderSVG");
//       folderIcon.src = "./Icons/Folder.svg";
//       var item = document.createElement("li");
//       item.classList.add("list");
//       item.append(folderIcon);
//       item.appendChild(document.createTextNode(data.name));
//       list.appendChild(item);
//     }
//     for (let i = 0; i < data.children.length; i++) {
//       renderLeftSidePane(data.children[i], list);
//     }
//   }
//   listElement?.appendChild(list);
// };

// renderLeftSidePane(rootFolder, document.querySelector(".folderTreePane"));

// const clearcontent = (elementId) => {
//   if (elementId) {
//     document.querySelector(elementId).innerHTML = "";
//   }
// };

// const selectFolder = (e) => {
//   clearcontent(".tableContent");
//   let selectedFolderName = e.target.innerText;
//   let resultSearchTree = searchTree(rootFolder, selectedFolderName);
//   renderRightSidePane(resultSearchTree);
// };

// const handleFolderClick = document.querySelectorAll(".list");
// handleFolderClick.forEach((box) => {
//   box.addEventListener("click", (e) => selectFolder(e));
// });

// const expander = document.querySelectorAll(".list");
// for (let i = 0; i < expander.length; ++i) {
//   expander[i].onclick = function () {
//     for (let j = 1; j < this.parentElement.querySelectorAll("li").length; j++) {
//       const ul = this.parentElement.querySelectorAll("li")[j];
//       if (ul.offsetHeight > 0) {
//         ul.style.display = "none";
//       } else {
//         ul.style.display = "block";
//       }
//     }
//   };
// }
