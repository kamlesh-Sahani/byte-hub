import Section from "./Section";
import TableOfContents from "./TableOfContents";

const TutorialBox = () => {
    const data = {
        "sections": [
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            }, {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            },
            {
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            } ,{
                "title": "Introduction to Computer Graphics",
                "content": "Computer graphics is the art and science of creating and manipulating visual content on computers. It's a crucial field for video games, simulations, and user interface design.",
                "codeSnippet": "console.log('Welcome to Computer Graphics');"
            },
            {
                "title": "Understanding Pixels and Resolution",
                "content": "Pixels are the smallest units in a digital image, and resolution refers to the number of pixels in a given area. Higher resolutions mean more detail and clarity.",
                "codeSnippet": "const pixels = Array(100).fill('pixel'); console.log(pixels);"
            },
            {
                "title": "Color Models: RGB and CMYK",
                "content": "Color models represent colors in a format that can be interpreted by computers. RGB is used for screens, while CMYK is for print.",
                "codeSnippet": "const colorRGB = { r: 255, g: 0, b: 0 }; console.log(colorRGB);"
            },
            {
                "title": "Graphics Rendering Pipeline",
                "content": "The rendering pipeline is a sequence of steps that convert 3D objects into a 2D screen image. It includes stages like vertex processing, rasterization, and pixel shading.",
                "codeSnippet": "function render(scene) { /* pipeline code */ }"
            }
        ]
    }

    return (
        <div className="flex scroll-smooth">
            {/* Sidebar with Table of Contents */}
            <aside className="w-1/4 p-6 sticky top-0  h-screen border-r overflow-auto">
                <TableOfContents sections={data.sections} />
            </aside>

            {/* Main Content Area */}
            <main className="w-3/4 p-10 space-y-12">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Comprehensive Guide to Computer Graphics</h1>
                    <p className="text-lg text-gray-600">Explore fundamental concepts, techniques, and practical examples.</p>
                </header>

                {/* Render each section dynamically */}
                {data.sections.map((section, index) => (
                    <Section
                        key={index}
                        hrefid={index}
                        title={section.title}
                        content={section.content}
                        codeSnippet={section.codeSnippet}
                    />
                ))}
            </main>
        </div>
    );
};

export default TutorialBox;
