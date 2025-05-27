<template>
  <div ref="cyContainer" class="cytoscape-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import cytoscape from "cytoscape";

type CategoryTree = ({
  ancestor: { category: string; id: number };
  descendant: { category: string; id: number };
} & {
  ancestorId: number;
  descendantId: number;
})[];

const props = defineProps<{
  tree: CategoryTree;
}>();

const cyContainer = ref<HTMLDivElement | null>(null);
let cyInstance: cytoscape.Core | null = null;

function toCytoscapeElements(tree: CategoryTree) {
  const nodesMap = new Map<number, { data: { id: string; label: string } }>();
  const edges: { data: { id: string; source: string; target: string } }[] = [];

  tree.forEach(({ ancestor, descendant, ancestorId, descendantId }) => {
    if (ancestorId === descendantId) return; // overslaan

    if (!nodesMap.has(ancestor.id)) {
      nodesMap.set(ancestor.id, {
        data: { id: ancestor.id.toString(), label: ancestor.category },
      });
    }
    if (!nodesMap.has(descendant.id)) {
      nodesMap.set(descendant.id, {
        data: { id: descendant.id.toString(), label: descendant.category },
      });
    }
    edges.push({
      data: {
        id: `${ancestorId}-${descendantId}`,
        source: ancestorId.toString(),
        target: descendantId.toString(),
      },
    });
  });

  return {
    nodes: Array.from(nodesMap.values()),
    edges,
  };
}

onMounted(async () => {
  await nextTick();

  if (!cyContainer.value) return;

  const elements = toCytoscapeElements(props.tree);

  cyInstance = cytoscape({
    container: cyContainer.value,
    elements: [...elements.nodes, ...elements.edges],
    style: [
      {
        selector: "node",
        style: {
          "background-color": "#007bff",
          label: "data(label)",
          color: "#fff",
          "text-valign": "center",
          "text-halign": "center",
          "font-size": "12px",
          "text-wrap": "wrap",
          width: "label",
          height: "label",
          padding: "10px",
          shape: "roundrectangle",
          "border-color": "#0056b3",
          "border-width": 2,
          "border-opacity": 0.8,
        },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          "line-color": "#007bff",
          "target-arrow-color": "#007bff",
          "target-arrow-shape": "triangle",
          "curve-style": "bezier",
        },
      },
    ],
    layout: {
      name: "breadthfirst",
      directed: true,
      padding: 20,
      spacingFactor: 1.2,
      animate: true,
    },
  });
});
</script>

<style scoped>
.cytoscape-container {
  width: 100%;
  height: 600px;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
}
</style>
