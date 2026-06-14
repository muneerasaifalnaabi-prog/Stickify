"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import { Type, Image as ImageIcon, Download, Trash2, Circle, Square, Triangle, Smile, PenTool, MousePointer, Star } from 'lucide-react';

export default function StickerEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize fabric canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: 'transparent',
      });

      setFabricCanvas(canvas);

      // Cleanup
      return () => {
        canvas.dispose();
      };
    }
  }, []);

  const addText = () => {
    if (!fabricCanvas) return;
    const text = new fabric.IText('Meme Text', {
      left: 100,
      top: 100,
      fontFamily: 'Impact, var(--font-titan), sans-serif',
      fontSize: 40,
      fill: '#ffffff',
      stroke: '#000000',
      strokeWidth: 2,
    });
    fabricCanvas.add(text);
    fabricCanvas.setActiveObject(text);
    fabricCanvas.renderAll();
  };

  const addShape = (type: 'circle' | 'square' | 'triangle' | 'star') => {
    if (!fabricCanvas) return;
    let shape;
    const commonOpts = { left: 150, top: 150, fill: '#ff6b8b', stroke: '#000000', strokeWidth: 4 };
    
    if (type === 'circle') shape = new fabric.Circle({ ...commonOpts, radius: 50 });
    else if (type === 'square') shape = new fabric.Rect({ ...commonOpts, width: 100, height: 100, fill: '#4db8ff' });
    else if (type === 'triangle') shape = new fabric.Triangle({ ...commonOpts, width: 100, height: 100, fill: '#ffa500' });
    else if (type === 'star') shape = new fabric.IText('⭐', { left: 150, top: 150, fontSize: 80 });
    
    if (shape) {
      fabricCanvas.add(shape);
      fabricCanvas.setActiveObject(shape);
      fabricCanvas.renderAll();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!fabricCanvas || !e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (f) => {
      const data = f.target?.result;
      if (typeof data === 'string') {
        fabric.Image.fromURL(data, { crossOrigin: 'anonymous' }).then((img) => {
          img.scaleToWidth(200);
          fabricCanvas.add(img);
          fabricCanvas.centerObject(img);
          fabricCanvas.setActiveObject(img);
          fabricCanvas.renderAll();
        }).catch(err => console.error("Error loading image", err));
      }
    };
    reader.readAsDataURL(file);
  };

  const addTemplate = (type: 'face' | 'dealWithIt') => {
    if (!fabricCanvas) return;
    
    if (type === 'face') {
      const face = new fabric.Circle({ radius: 50, fill: 'yellow', stroke: 'black', strokeWidth: 4 });
      const eye1 = new fabric.Circle({ radius: 5, fill: 'black', left: 25, top: 30 });
      const eye2 = new fabric.Circle({ radius: 5, fill: 'black', left: 65, top: 30 });
      const smile = new fabric.Path('M 30 65 Q 50 85 70 65', { fill: 'transparent', stroke: 'black', strokeWidth: 4 });
      const group = new fabric.Group([face, eye1, eye2, smile], { left: 200, top: 200 });
      fabricCanvas.add(group);
      fabricCanvas.setActiveObject(group);
    } else if (type === 'dealWithIt') {
      const glassLeft = new fabric.Rect({ width: 40, height: 20, fill: 'black', left: 10, top: 10 });
      const glassRight = new fabric.Rect({ width: 40, height: 20, fill: 'black', left: 60, top: 10 });
      const bridge = new fabric.Rect({ width: 10, height: 5, fill: 'black', left: 50, top: 15 });
      const group = new fabric.Group([glassLeft, glassRight, bridge], { left: 200, top: 200 });
      fabricCanvas.add(group);
      fabricCanvas.setActiveObject(group);
    }
    fabricCanvas.renderAll();
  };

  const toggleDrawingMode = () => {
    if (!fabricCanvas) return;
    const newMode = !isDrawing;
    setIsDrawing(newMode);
    fabricCanvas.isDrawingMode = newMode;
    if (newMode) {
      fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
      fabricCanvas.freeDrawingBrush.color = '#000000';
      fabricCanvas.freeDrawingBrush.width = 8;
    }
  };

  const deleteSelected = () => {
    if (!fabricCanvas) return;
    const activeObjects = fabricCanvas.getActiveObjects();
    if (activeObjects.length) {
      activeObjects.forEach((obj) => {
        fabricCanvas.remove(obj);
      });
      fabricCanvas.discardActiveObject();
      fabricCanvas.renderAll();
    }
  };

  const downloadSticker = () => {
    if (!fabricCanvas) return;
    fabricCanvas.discardActiveObject();
    fabricCanvas.renderAll();
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      multiplier: 2, // High quality
    });
    const link = document.createElement('a');
    link.download = 'my-meme-sticker.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container">
      <h2 style={{ fontSize: '3rem', textAlign: 'center', margin: '4rem 0 1rem' }}>Create Your Sticker</h2>
      <div className="editor-container">
        {/* Toolbar */}
        <div className="editor-sidebar">
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid black', paddingBottom: '0.5rem' }}>Tools</h3>
          
          <button className="tool-button" onClick={toggleDrawingMode} style={{ backgroundColor: isDrawing ? '#e5e7eb' : 'white', borderColor: isDrawing ? '#000' : '' }}>
            {isDrawing ? <MousePointer size={20} /> : <PenTool size={20} />} 
            {isDrawing ? 'Stop Drawing' : 'Draw (Marker)'}
          </button>

          <button className="tool-button" onClick={addText}>
            <Type size={20} /> Add Text
          </button>
          
          <label className="tool-button" style={{ cursor: 'pointer', display: 'flex' }}>
            <ImageIcon size={20} /> Upload Image
            <input 
              type="file" 
              accept="image/*" 
              style={{ display: 'none' }} 
              onChange={handleImageUpload} 
            />
          </label>

          <h3 style={{ margin: '1.5rem 0 1rem', borderBottom: '2px solid black', paddingBottom: '0.5rem' }}>Shapes</h3>
          <div className="flex gap-2" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
            <button className="tool-button" title="Circle" style={{ flex: 1, padding: '0.5rem', marginBottom: 0, justifyContent: 'center' }} onClick={() => addShape('circle')}><Circle size={20} /></button>
            <button className="tool-button" title="Square" style={{ flex: 1, padding: '0.5rem', marginBottom: 0, justifyContent: 'center' }} onClick={() => addShape('square')}><Square size={20} /></button>
            <button className="tool-button" title="Triangle" style={{ flex: 1, padding: '0.5rem', marginBottom: 0, justifyContent: 'center' }} onClick={() => addShape('triangle')}><Triangle size={20} /></button>
            <button className="tool-button" title="Star" style={{ flex: 1, padding: '0.5rem', marginBottom: 0, justifyContent: 'center' }} onClick={() => addShape('star')}><Star size={20} /></button>
          </div>

          <h3 style={{ margin: '1.5rem 0 1rem', borderBottom: '2px solid black', paddingBottom: '0.5rem' }}>Templates</h3>
          <button className="tool-button" onClick={() => addTemplate('face')}>
            <Smile size={20} /> Smiley Face
          </button>
          <button className="tool-button" onClick={() => addTemplate('dealWithIt')}>
            <Square size={20} /> Pixel Glasses
          </button>
          
          <h3 style={{ margin: '1.5rem 0 1rem', borderBottom: '2px solid black', paddingBottom: '0.5rem' }}>Actions</h3>
          <button className="tool-button" onClick={deleteSelected} style={{ color: 'red', borderColor: '#ffcccc' }}>
            <Trash2 size={20} /> Delete Selected
          </button>

          <div style={{ flex: 1 }}></div>

          <button className="meme-button" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }} onClick={downloadSticker}>
            <Download size={20} /> Export PNG
          </button>
        </div>

        {/* Canvas Area */}
        <div className="editor-canvas-wrapper">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </section>
  );
}
