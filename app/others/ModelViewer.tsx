// app/components/ModelViewer.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ModelViewer() {
  const modelViewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadModelViewer = async () => {
      if (typeof window !== "undefined" && modelViewerRef.current) {
        const { ModelViewerElement } = await import(
          "@google/model-viewer/dist/model-viewer.min.js"
        );

        const modelViewer = document.createElement("model-viewer");
        modelViewer.setAttribute("src", "/KnowledgeBase.glb");
        modelViewer.setAttribute("camera-controls", "");
        modelViewer.id = "mv-diagram";
        modelViewer.className = "w-full h-full bg-transparent";

        modelViewerRef.current.innerHTML = "";
        modelViewerRef.current.appendChild(modelViewer);

  

        modelViewer.addEventListener("load", () => {
          const symbols = Object.getOwnPropertySymbols(modelViewer);
          const sceneSymbol = symbols.find(
            (symbol) => symbol.description === "scene"
          );
          
          


          if (sceneSymbol) {
            const scene = modelViewer[sceneSymbol];
            let n = 0;
            // scene.traverse((node: any) => {
            //   if (node.isNode) {
            //     // Set slot name
            //     node.slot = `hotspot-${n++}`;
                
            //     // Get world position
            //     const position = node.position.clone();
                
            //     // Set dataset properties
            //     node.dataset = node.dataset || {};
            //     node.dataset.normal = `${position.x} ${position.y} ${position.z}`;
            //     node.dataset.position = `${position.x} ${position.y} ${position.z}`;
            //   }
            // });
            
            // scene.traverse((node: any) => {
            //   if (node.name && node.name.indexOf("link-") === 0) {
            //     const nodeData = JSON.parse(atob(node.name.substring(5)));
            //     const hotspot = document.createElement("button");
            //     const url = document.createElement("a");
            //     url.setAttribute("href", nodeData.url);
            //     hotspot.textContent = url.hostname;
            //     hotspot.slot = "hotspot-" + n++;
            //     hotspot.className = "absolute transform -translate-x-1/2 translate-y-6 rounded-md border-none outline-none bg-[#8700ff] text-white hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer text-xs underline px-4 py-2";
                
            //     const position = node.position.clone();
            //     position.set(nodeData.x, nodeData.y, nodeData.z);
            //     hotspot.dataset.normal = hotspot.dataset.position = `${position.x} ${position.y} ${position.z}`;
                
            //     modelViewer.appendChild(hotspot);
            //     hotspot.addEventListener("click", () => {
            //       window.open(nodeData.url, "_blank");
            //     });
            //   }
            // });
          }
        });
      }
    };

    loadModelViewer();
  }, []);

  return (
    <div className="w-full h-[80vh]">
      <div ref={modelViewerRef} className="w-full h-full" />
    </div>
  );
}