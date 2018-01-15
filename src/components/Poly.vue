<template>
  <div id="poly"></div>
</template>

<style>
  #poly {
    background: radial-gradient(ellipse at center, #292b37 40%, black 100%);
    background: #292b37;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 0;
  }
</style>

<script>
  export default {
    data () {
      return {
        refreshDuration: 10000,
        refreshTimeout: null,
        numPointsX: null,
        numPointsY: null,
        unitWidth: null,
        unitHeight: null,
        unitSize: null,
        points: [],
        viewportHeight: null,
        viewportWidth: null
      }
    },
    mounted () {
      this.init()
      window.addEventListener('resize', this.onResize)
    },
    methods: {
      init () {
        if (document.compatMode === 'BackCompat') {
          this.viewportHeight = document.body.clientHeight
          this.viewportWidth = document.body.clientWidth
        } else {
          this.viewportHeight = document.documentElement.clientHeight
          this.viewportWidth = document.documentElement.clientWidth
        }

        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('width', this.viewportWidth)
        svg.setAttribute('height', this.viewportHeight)
        document.querySelector('#poly').appendChild(svg)

        this.unitSize = (window.innerWidth + window.innerHeight) / 20
        this.numPointsX = Math.ceil(window.innerWidth / this.unitSize) + 1
        this.numPointsY = Math.ceil(window.innerHeight / this.unitSize) + 1
        this.unitWidth = Math.ceil(window.innerWidth / (this.numPointsX - 1))
        this.unitHeight = Math.ceil(window.innerHeight / (this.numPointsY - 1))

        this.points = []

        for (let y = 0; y < this.numPointsY; y++) {
          for (let x = 0; x < this.numPointsX; x++) {
            this.points.push({
              x: this.unitWidth * x,
              y: this.unitHeight * y,
              originX: this.unitWidth * x,
              originY: this.unitHeight * y
            })
          }
        }

        this.randomize()

        for (let i = 0; i < this.points.length; i++) {
          if (this.points[i].originX !== this.unitWidth * (this.numPointsX - 1) && this.points[i].originY !== this.unitHeight * (this.numPointsY - 1)) {
            let topLeftX = this.points[i].x
            let topLeftY = this.points[i].y
            let topRightX = this.points[i + 1].x
            let topRightY = this.points[i + 1].y
            let bottomLeftX = this.points[i + this.numPointsX].x
            let bottomLeftY = this.points[i + this.numPointsX].y
            let bottomRightX = this.points[i + this.numPointsX + 1].x
            let bottomRightY = this.points[i + this.numPointsX + 1].y

            let rando = Math.floor(Math.random() * 2)

            for (let n = 0; n < 2; n++) {
              let polygon = document.createElementNS(svg.namespaceURI, 'polygon')

              if (rando === 0) {
                if (n === 0) {
                  polygon.point1 = i
                  polygon.point2 = i + this.numPointsX
                  polygon.point3 = i + this.numPointsX + 1
                  polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + bottomRightX + ',' + bottomRightY)
                } else if (n === 1) {
                  polygon.point1 = i
                  polygon.point2 = i + 1
                  polygon.point3 = i + this.numPointsX + 1
                  polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY)
                }
              } else if (rando === 1) {
                if (n === 0) {
                  polygon.point1 = i
                  polygon.point2 = i + this.numPointsX
                  polygon.point3 = i + 1
                  polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY)
                } else if (n === 1) {
                  polygon.point1 = i + this.numPointsX
                  polygon.point2 = i + 1
                  polygon.point3 = i + this.numPointsX + 1
                  polygon.setAttribute('points', bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY)
                }
              }
              polygon.setAttribute('fill', 'rgba(0,0,0,' + (Math.random() / 3) + ')')
              let animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
              animate.setAttribute('fill', 'freeze')
              animate.setAttribute('attributeName', 'points')
              animate.setAttribute('dur', this.refreshDuration + 'ms')
              animate.setAttribute('calcMode', 'linear')
              polygon.appendChild(animate)
              svg.appendChild(polygon)
            }
          }
        }

        this.refresh()
      },
      randomize () {
        for (let i = 0; i < this.points.length; i++) {
          if (this.points[i].originX !== 0 && this.points[i].originX !== this.unitWidth * (this.numPointsX - 1)) {
            this.points[i].x = this.points[i].originX + Math.random() * this.unitWidth - this.unitWidth / 2
          }
          if (this.points[i].originY !== 0 && this.points[i].originY !== this.unitHeight * (this.numPointsY - 1)) {
            this.points[i].y = this.points[i].originY + Math.random() * this.unitHeight - this.unitHeight / 2
          }
        }
      },
      refresh () {
        let self = this
        this.randomize()
        for (let i = 0; i < document.querySelector('#poly svg').childNodes.length; i++) {
          let polygon = document.querySelector('#poly svg').childNodes[i]
          let animate = polygon.childNodes[0]
          if (animate.getAttribute('to')) {
            animate.setAttribute('from', animate.getAttribute('to'))
          }
          animate.setAttribute('to', this.points[polygon.point1].x + ',' + this.points[polygon.point1].y + ' ' + this.points[polygon.point2].x + ',' + this.points[polygon.point2].y + ' ' + this.points[polygon.point3].x + ',' + this.points[polygon.point3].y)
          animate.beginElement()
        }
        this.refreshTimeout = setTimeout(function () { self.refresh() }, this.refreshDuration)
      },
      onResize () {
        document.querySelector('#poly svg').remove()
        clearTimeout(this.refreshTimeout)
        this.init()
      }
    }
  }
</script>
