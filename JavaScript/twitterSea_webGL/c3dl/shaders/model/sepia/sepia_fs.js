
c3dl.sepia_fs="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"uniform sampler2D myTex;"+"uniform int usingTexture;"+"varying vec4 texCoord;"+"uniform vec3 color;"+"varying vec4 frontColor;"+"void main(void) {"+" vec4 col = frontColor;"+" if( usingTexture == 1 ){"+"  vec3 texel = vec3(texture2D(myTex, texCoord.xy));"+"  col *= vec4(texel,1.0);"+" }"+" float grey = dot(col.rgb, vec3(0.3, 0.6, 0.1));"+" gl_FragColor = vec4(grey * color, 1.0);"+"}";