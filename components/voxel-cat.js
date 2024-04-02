import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from "../libs/model";

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelCat = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()
  
    const handleWindowResize = useCallback(() => {
      const { current: renderer } = refRenderer
      const { current: container } = refContainer
      if (container && renderer) {
        const scW = container.clientWidth
        const scH = container.clientHeight
  
        renderer.setSize(scW, scH)
      }
    }, [])
  
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
      const { current: container } = refContainer
      if (container) {
        const scW = container.clientWidth
        const scH = container.clientHeight
  
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(scW, scH)
        renderer.outputEncoding = THREE.sRGBEncoding
        container.appendChild(renderer.domElement)
        refRenderer.current = renderer
        const scene = new THREE.Scene()
  
        const target = new THREE.Vector3(-0.5, 1.2, 0)
        const initialCameraPosition = new THREE.Vector3(
          20 * Math.sin(0.2 * Math.PI),
          10,
          20 * Math.cos(0.2 * Math.PI)
        )
  
        // 640 -> 240
        // 8   -> 6
        const scale = scH * 0.0001 + 4.8
        const camera = new THREE.OrthographicCamera(
          -scale,
          scale,
          scale,
          -scale,
          0.01,
          50000
        )
        camera.position.copy(initialCameraPosition)
        camera.lookAt(target)
  
        const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
        scene.add(ambientLight)
  
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.target = target
  
        loadGLTFModel(scene, '/images/cat-baked.glb', {
          receiveShadow: false,
          castShadow: false
        }).then(() => {
          animate()
          setLoading(false)
        })
  
        let req = null
        let frame = 0
        const animate = () => {
          req = requestAnimationFrame(animate)
  
          frame = frame <= 100 ? frame + 1 : frame
  
          if (frame <= 100) {
            const p = initialCameraPosition
            const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
  
            camera.position.y = 10
            camera.position.x =
              p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
            camera.position.z =
              p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
            camera.lookAt(target)
          } else {
            controls.update()
          }
  
          renderer.render(scene, camera)
        }
  
        return () => {
          cancelAnimationFrame(req)
          renderer.domElement.remove()
          renderer.dispose()
        }
      }
    }, [])
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize, false)
      return () => {
        window.removeEventListener('resize', handleWindowResize, false)
      }
    }, [handleWindowResize])
  
    
    return (
        <Box
            ref={refContainer}
            className='volex-cat'
            m='auto'
            at={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[280, 480, 640]}
            h={[200, 480, 640]}
            position='relative'
        >
            {loading && (
                <Spinner
                    size='xl'
                    position='absolute'
                    left='50%'
                    top='50%'
                    ml='calc(0px - var(--spinner-size)/2)'
                    mt='calc(0px - var(--spinner-size))'
                />
            )}
        </Box>
    )
}

export default VoxelCat
