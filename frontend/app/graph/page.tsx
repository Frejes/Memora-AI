"use client";

import { useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

import { getGraph } from "@/lib/api";

export default function GraphPage() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const graph = await getGraph();

      const flowNodes = graph.nodes.map(
        (node: any, index: number) => ({
          id: node.id,
          data: { label: node.label },
          position: {
            x: (index % 3) * 300,
            y: Math.floor(index / 3) * 220,
          },
        })
      );

      const flowEdges = graph.edges.map(
        (edge: any, index: number) => ({
          id: "e" + index,
          source: edge.source,
          target: edge.target,
        })
      );

      setNodes(flowNodes);
      setEdges(flowEdges);
    }

    load();
  }, []);

  return (
    <div className="h-screen bg-[#070B14] relative">
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodeClick={(event, node) => {
                setSelectedNode(node);
            }}
        >
            <Background />
            <Controls />
            </ReactFlow>

            {selectedNode && (
                <div className="absolute top-5 right-5 w-72 rounded-xl bg-[#111827] border border-white/10 p-5 text-white shadow-lg z-50">
                    <h2 className="text-xl font-bold mb-3">
                        {selectedNode.data.label}
                    </h2>

                    <p className="text-gray-300">
                        This entity was extracted from the uploaded document.
                    </p>

                    <button
                        className="mt-5 w-full rounded-lg bg-cyan-500 p-2"
                        onClick={() => setSelectedNode(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}   