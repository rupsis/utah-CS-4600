function clamp(num, min, max) {
    return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
}

function alpha(cf, af, cb, ab){

    const foregroundAlpha = af / 255;
    const backgroundAlpha = ab / 255;

    const alphaSum = foregroundAlpha + backgroundAlpha;

    return Math.round(cf * foregroundAlpha + cb * (1 - foregroundAlpha)) / alphaSum;
}

// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{



const startX = fgPos.x;
const startY = fgPos.y;

const fgWidth = fgImg.width;
const fgHeight = fgImg.height;
const bgWidth = bgImg.width;
const bgHeight = bgImg.height;



for(let y = 0; y < fgHeight; y++){
    for(let x = 0; x < fgWidth; x++){
        const foregroundIndex = (y * fgWidth + x) * 4;
        const backgroundIndex = ((y + startY) * bgWidth + x + startX) * 4;

        const bgX = x + startX;
        const bgY = y + startY;
        if (bgX >= 0 && bgX < bgWidth && bgY >= 0 && bgY < bgHeight) {
            for(var k = 0; k < 3; k++){
                bgImg.data[backgroundIndex + k] = alpha(
                    fgImg.data[foregroundIndex + k], // color foreground
                    fgImg.data[foregroundIndex + 3],
                    bgImg.data[backgroundIndex + k], // color background
                    bgImg.data[backgroundIndex + 3] // alpha background
                )
            }
        }
    }
}

}






// The parts of the foreground image that fall outside of the background image should be ignored.

