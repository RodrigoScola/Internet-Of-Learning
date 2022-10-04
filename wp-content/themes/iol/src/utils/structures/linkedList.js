class TreeNode {
	#_next
	constructor(data) {
		this.data = data
		this.#_next = null
	}
	get next() {
		return this.#_next
	}
	set next(newVal) {
		if (newVal instanceof TreeNode) {
			return (this.#_next = newVal)
		} else if (newVal) {
			return (this.#_next = new TreeNode(newVal))
		}
		return (this.#_next = null)
	}
}
export class List {
	#_maxIndex
	constructor(options = { maxIndex: null }) {
		this.head = null
		this.len = 0
		this.#_maxIndex = options.maxIndex
	}
	get maxIndex  () {
		return this.#_maxIndex
	}

	setElements(elems = null) {
		this.head = elems
	}
     getElements(callabck = null) {
          
		let arr = []
		let curr = this.head
		while (curr) {
			arr.push(curr.data)

			curr = curr.next
		}
		if (typeof callabck == "function") {
			return callabck(arr)
		}
		return arr
	}

	changeAt(index, newVal) {
		let ind = 0,
			curr = this.head
		if (index >= this.len || index < 0) return null
		while (ind < index) {
			ind++
			curr = curr.next
		}
		curr.data = newVal
	}
	addHead(element) {
		const node = new TreeNode(element)

		if (!this.head) {
			this.len++
			return (this.head = node)
		}
		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = node

		return this.len++
	}
	removeHead(element) {
		if (this.head.data == element) {
			this.len--
			return (this.head = this.head.next)
		}
		let previous = this.head
		while (previous) {
			let current = previous.next
			if (current) {
				if (current.data == element) {
					previous.next = current.next
				}
			}
			previous = current
		}
		this.len--
	}
	indexOf(element) {
		let index = -1,
			found = false,
			current = this.head
		while (!found && current) {
			index++
			if (current.data == element) {
				found = true
			} else {
				current = current.next
			}
		}
		return found == false ? -1 : index
	}
	elementAt(index) {
		let curr = this.head,
			curIn = 0
		if (index > this.len || index < 0) return undefined
		while (curIn !== index) {
			curIn++
			curr = curr.next
		}
		return curr.element
	}
	removeAt = function (index) {
		console.log(this.getElements())
		console.log('hjasodf')
       if (index <= 0 || index >= this.len) {
			return null
		}
		let deletedNode = this.head
		if (index == 0) {
			this.head = null
		} else {
			let currentNode = this.head
			let currentIndex = 0
			while (currentIndex < index - 1) {
				currentNode = currentNode.next
				currentIndex++
			}
			deletedNode = currentNode.next
			currentNode.next = deletedNode.next
		}
		this.len--
		return deletedNode.element
	}
	addAt = (index, element) => {
		if (index < 0 || index > this.#_maxIndex) return null
		let node = this.head
		if (index > 0) {
			let i = 0
			while (i + 1 !== index) {
				node = node.next
				i++
			}
		}
		const newNode = new TreeNode(element)
		newNode.next = node.next
		if (index === 0) {
			this.head = newNode
		} else {
			node.next = newNode
		}
		this.len++
	}
	log() {
		console.log(this.getElements())
	}
}
