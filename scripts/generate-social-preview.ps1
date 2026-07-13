Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$output = Join-Path $root 'public\social-preview.png'
$canvas = [System.Drawing.Bitmap]::new(1200, 630)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function Color([string]$hex) {
  [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function Draw-Text([string]$text, [System.Drawing.Font]$font, [System.Drawing.Brush]$brush, [float]$x, [float]$y, [float]$width, [System.Drawing.StringFormat]$format) {
  $layout = [System.Drawing.RectangleF]::new($x, $y, $width, 0)
  $graphics.DrawString($text, $font, $brush, $layout, $format)
}

$paper = Color '#f8fafd'
$ink = Color '#151e35'
$secondary = Color '#3d485b'
$blue = Color '#2060b9'
$green = Color '#0e8142'
$rose = Color '#be3e60'
$border = Color '#d8dfe7'

$graphics.Clear($paper)

# A quiet version of the cover's listening-ripple motif.
$ripplePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(22, $blue), 12)
foreach ($size in @(330, 470, 610)) {
  $graphics.DrawEllipse($ripplePen, 910 - ($size / 2), -100 - ($size / 2), $size, $size)
}
$ripplePen.Dispose()

# The three-voice seam is carried straight across the top, inside the safe area.
$graphics.FillRectangle([System.Drawing.SolidBrush]::new($green), 72, 54, 210, 10)
$graphics.FillRectangle([System.Drawing.SolidBrush]::new($blue), 282, 54, 210, 10)
$graphics.FillRectangle([System.Drawing.SolidBrush]::new($rose), 492, 54, 210, 10)

$sans = [System.Drawing.FontFamily]::new('Arial')
$serif = [System.Drawing.FontFamily]::new('Georgia')
$groupFont = [System.Drawing.Font]::new($sans, 16, [System.Drawing.FontStyle]::Bold)
$kickerFont = [System.Drawing.Font]::new($sans, 16, [System.Drawing.FontStyle]::Regular)
$titleFont = [System.Drawing.Font]::new($sans, 38, [System.Drawing.FontStyle]::Bold)
$subtitleFont = [System.Drawing.Font]::new($serif, 23, [System.Drawing.FontStyle]::Italic)
$authorFont = [System.Drawing.Font]::new($sans, 16, [System.Drawing.FontStyle]::Regular)
$labelFont = [System.Drawing.Font]::new($sans, 13, [System.Drawing.FontStyle]::Bold)
$format = [System.Drawing.StringFormat]::new()
$format.Trimming = [System.Drawing.StringTrimming]::EllipsisWord

Draw-Text 'PETA' $groupFont ([System.Drawing.SolidBrush]::new($blue)) 72 88 90 $format
Draw-Text '-  INTERVIEW PORTFOLIO' $kickerFont ([System.Drawing.SolidBrush]::new($secondary)) 127 88 300 $format
Draw-Text 'The Lived Experiences of Persons with Disabilities' $titleFont ([System.Drawing.SolidBrush]::new($ink)) 72 145 690 $format
Draw-Text 'A Philosophical Reflection' $subtitleFont ([System.Drawing.SolidBrush]::new($secondary)) 76 347 550 $format

$quotePen = [System.Drawing.Pen]::new($blue, 4)
$graphics.DrawLine($quotePen, 76, 403, 145, 403)
$quotePen.Dispose()
Draw-Text 'Genuine understanding begins by listening to the voices of those whose experiences are often overlooked.' $subtitleFont ([System.Drawing.SolidBrush]::new($ink)) 76 420 630 $format

# Portraits reproduce the cover's three contributors without browser chrome.
$portraits = @(
  @{ File = 'zyrah.png'; Name = 'Zyrah Mariez P. Grandeza'; Color = $rose },
  @{ File = 'zhaina.png'; Name = 'Zhaina Jhazelle M. Morden'; Color = $blue },
  @{ File = 'bowen.png'; Name = 'Daniel Bowen N. Mutuc'; Color = $green }
)
$x = 800
foreach ($portrait in $portraits) {
  $graphics.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(20, $portrait.Color)), $x, 150, 105, 105)
  $graphics.DrawRectangle([System.Drawing.Pen]::new($portrait.Color, 2), $x, 150, 105, 105)
  $image = [System.Drawing.Image]::FromFile((Join-Path $root "public\$($portrait.File)"))
  $graphics.DrawImage($image, $x + 4, 154, 97, 97)
  $image.Dispose()
  Draw-Text $portrait.Name $authorFont ([System.Drawing.SolidBrush]::new($ink)) ($x - 2) 268 112 $format
  $x += 115
}

$graphics.DrawLine([System.Drawing.Pen]::new($border, 1), 72, 555, 1128, 555)
Draw-Text 'PHILOSOPHY  -  12-KELVIN  -  2026-2027' $labelFont ([System.Drawing.SolidBrush]::new($secondary)) 72 575 500 $format
Draw-Text 'PETA GROUP ePORTFOLIO' $labelFont ([System.Drawing.SolidBrush]::new($secondary)) 880 575 248 $format

$canvas.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)

$authorFont.Dispose(); $groupFont.Dispose(); $kickerFont.Dispose(); $titleFont.Dispose(); $subtitleFont.Dispose(); $labelFont.Dispose()
$format.Dispose(); $graphics.Dispose(); $canvas.Dispose()
