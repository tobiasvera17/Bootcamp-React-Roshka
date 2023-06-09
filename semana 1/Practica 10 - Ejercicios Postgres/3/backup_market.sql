PGDMP     :    3                z            bootcamp_market    10.14    10.14 7    9           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            :           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            ;           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            <           1262    33127    bootcamp_market    DATABASE     �   CREATE DATABASE bootcamp_market WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE bootcamp_market;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            =           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            >           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    33173    cliente    TABLE     �   CREATE TABLE public.cliente (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    apellido character varying NOT NULL,
    nro_cedula character varying NOT NULL,
    telefono character varying
);
    DROP TABLE public.cliente;
       public         postgres    false    3            �            1259    33171    cliente_id_seq    SEQUENCE     w   CREATE SEQUENCE public.cliente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.cliente_id_seq;
       public       postgres    false    204    3            ?           0    0    cliente_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.cliente_id_seq OWNED BY public.cliente.id;
            public       postgres    false    203            �            1259    33184    factura    TABLE     �   CREATE TABLE public.factura (
    id integer NOT NULL,
    fecha_emision date NOT NULL,
    fecha_vencimiento date,
    cliente_id integer NOT NULL,
    factura_tipo_id integer NOT NULL,
    moneda_id integer NOT NULL
);
    DROP TABLE public.factura;
       public         postgres    false    3            �            1259    33190    factura_detalle    TABLE     �   CREATE TABLE public.factura_detalle (
    id integer NOT NULL,
    producto_id integer NOT NULL,
    cantidad real DEFAULT 1 NOT NULL,
    factura_id integer NOT NULL
);
 #   DROP TABLE public.factura_detalle;
       public         postgres    false    3            �            1259    33182    factura_id_seq    SEQUENCE     w   CREATE SEQUENCE public.factura_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.factura_id_seq;
       public       postgres    false    3    206            @           0    0    factura_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.factura_id_seq OWNED BY public.factura.id;
            public       postgres    false    205            �            1259    33157    factura_tipo    TABLE     e   CREATE TABLE public.factura_tipo (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
     DROP TABLE public.factura_tipo;
       public         postgres    false    3            �            1259    33155    factura_tipo_id_seq    SEQUENCE     |   CREATE SEQUENCE public.factura_tipo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.factura_tipo_id_seq;
       public       postgres    false    3    201            A           0    0    factura_tipo_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.factura_tipo_id_seq OWNED BY public.factura_tipo.id;
            public       postgres    false    200            �            1259    33130    moneda    TABLE     _   CREATE TABLE public.moneda (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
    DROP TABLE public.moneda;
       public         postgres    false    3            �            1259    33128    moneda_id_seq    SEQUENCE     v   CREATE SEQUENCE public.moneda_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.moneda_id_seq;
       public       postgres    false    3    197            B           0    0    moneda_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.moneda_id_seq OWNED BY public.moneda.id;
            public       postgres    false    196            �            1259    33139    pais    TABLE     ]   CREATE TABLE public.pais (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
    DROP TABLE public.pais;
       public         postgres    false    3            �            1259    33163    producto    TABLE     �   CREATE TABLE public.producto (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    precio numeric NOT NULL,
    proveedor_id integer NOT NULL,
    costo double precision NOT NULL
);
    DROP TABLE public.producto;
       public         postgres    false    3            �            1259    33147 	   proveedor    TABLE     �   CREATE TABLE public.proveedor (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    ruc character varying NOT NULL,
    pais_id integer NOT NULL
);
    DROP TABLE public.proveedor;
       public         postgres    false    3            �
           2604    33176 
   cliente id    DEFAULT     h   ALTER TABLE ONLY public.cliente ALTER COLUMN id SET DEFAULT nextval('public.cliente_id_seq'::regclass);
 9   ALTER TABLE public.cliente ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    204    203    204            �
           2604    33187 
   factura id    DEFAULT     h   ALTER TABLE ONLY public.factura ALTER COLUMN id SET DEFAULT nextval('public.factura_id_seq'::regclass);
 9   ALTER TABLE public.factura ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    205    206    206            �
           2604    33160    factura_tipo id    DEFAULT     r   ALTER TABLE ONLY public.factura_tipo ALTER COLUMN id SET DEFAULT nextval('public.factura_tipo_id_seq'::regclass);
 >   ALTER TABLE public.factura_tipo ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200    201            �
           2604    33133 	   moneda id    DEFAULT     f   ALTER TABLE ONLY public.moneda ALTER COLUMN id SET DEFAULT nextval('public.moneda_id_seq'::regclass);
 8   ALTER TABLE public.moneda ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            3          0    33173    cliente 
   TABLE DATA               M   COPY public.cliente (id, nombre, apellido, nro_cedula, telefono) FROM stdin;
    public       postgres    false    204   �:       5          0    33184    factura 
   TABLE DATA               o   COPY public.factura (id, fecha_emision, fecha_vencimiento, cliente_id, factura_tipo_id, moneda_id) FROM stdin;
    public       postgres    false    206   @       6          0    33190    factura_detalle 
   TABLE DATA               P   COPY public.factura_detalle (id, producto_id, cantidad, factura_id) FROM stdin;
    public       postgres    false    207   gJ       0          0    33157    factura_tipo 
   TABLE DATA               2   COPY public.factura_tipo (id, nombre) FROM stdin;
    public       postgres    false    201   �\       ,          0    33130    moneda 
   TABLE DATA               ,   COPY public.moneda (id, nombre) FROM stdin;
    public       postgres    false    197   �\       -          0    33139    pais 
   TABLE DATA               *   COPY public.pais (id, nombre) FROM stdin;
    public       postgres    false    198   U]       1          0    33163    producto 
   TABLE DATA               K   COPY public.producto (id, nombre, precio, proveedor_id, costo) FROM stdin;
    public       postgres    false    202   ^       .          0    33147 	   proveedor 
   TABLE DATA               =   COPY public.proveedor (id, nombre, ruc, pais_id) FROM stdin;
    public       postgres    false    199   �p       C           0    0    cliente_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cliente_id_seq', 1, false);
            public       postgres    false    203            D           0    0    factura_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.factura_id_seq', 1, false);
            public       postgres    false    205            E           0    0    factura_tipo_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.factura_tipo_id_seq', 1, false);
            public       postgres    false    200            F           0    0    moneda_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.moneda_id_seq', 1, false);
            public       postgres    false    196            �
           2606    33181    cliente cliente_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pk;
       public         postgres    false    204            �
           2606    33195 "   factura_detalle factura_detalle_pk 
   CONSTRAINT     `   ALTER TABLE ONLY public.factura_detalle
    ADD CONSTRAINT factura_detalle_pk PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.factura_detalle DROP CONSTRAINT factura_detalle_pk;
       public         postgres    false    207            �
           2606    33189    factura factura_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_pk;
       public         postgres    false    206            �
           2606    33162    factura_tipo factura_tipo_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.factura_tipo
    ADD CONSTRAINT factura_tipo_pk PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.factura_tipo DROP CONSTRAINT factura_tipo_pk;
       public         postgres    false    201            �
           2606    33138    moneda moneda_pk 
   CONSTRAINT     N   ALTER TABLE ONLY public.moneda
    ADD CONSTRAINT moneda_pk PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.moneda DROP CONSTRAINT moneda_pk;
       public         postgres    false    197            �
           2606    33146    pais pais_pk 
   CONSTRAINT     J   ALTER TABLE ONLY public.pais
    ADD CONSTRAINT pais_pk PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.pais DROP CONSTRAINT pais_pk;
       public         postgres    false    198            �
           2606    33170    producto producto_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pk;
       public         postgres    false    202            �
           2606    33154    proveedor proveedor_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT proveedor_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.proveedor DROP CONSTRAINT proveedor_pk;
       public         postgres    false    199            �
           2606    33221    factura cliente_factura_fk    FK CONSTRAINT     ~   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT cliente_factura_fk FOREIGN KEY (cliente_id) REFERENCES public.cliente(id);
 D   ALTER TABLE ONLY public.factura DROP CONSTRAINT cliente_factura_fk;
       public       postgres    false    2726    204    206            �
           2606    33240 *   factura_detalle factura_factura_detalle_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.factura_detalle
    ADD CONSTRAINT factura_factura_detalle_fk FOREIGN KEY (factura_id) REFERENCES public.factura(id);
 T   ALTER TABLE ONLY public.factura_detalle DROP CONSTRAINT factura_factura_detalle_fk;
       public       postgres    false    2728    206    207            �
           2606    33211    factura factura_tipo_factura_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_tipo_factura_fk FOREIGN KEY (factura_tipo_id) REFERENCES public.factura_tipo(id);
 I   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_tipo_factura_fk;
       public       postgres    false    206    2722    201            �
           2606    33235    factura moneda_factura_fk    FK CONSTRAINT     {   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT moneda_factura_fk FOREIGN KEY (moneda_id) REFERENCES public.moneda(id);
 C   ALTER TABLE ONLY public.factura DROP CONSTRAINT moneda_factura_fk;
       public       postgres    false    2716    197    206            �
           2606    33201    proveedor pais_proveedor_fk    FK CONSTRAINT     y   ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT pais_proveedor_fk FOREIGN KEY (pais_id) REFERENCES public.pais(id);
 E   ALTER TABLE ONLY public.proveedor DROP CONSTRAINT pais_proveedor_fk;
       public       postgres    false    199    2718    198            �
           2606    33216 +   factura_detalle producto_factura_detalle_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.factura_detalle
    ADD CONSTRAINT producto_factura_detalle_fk FOREIGN KEY (producto_id) REFERENCES public.producto(id);
 U   ALTER TABLE ONLY public.factura_detalle DROP CONSTRAINT producto_factura_detalle_fk;
       public       postgres    false    2724    202    207            �
           2606    33206    producto proveedor_producto_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT proveedor_producto_fk FOREIGN KEY (proveedor_id) REFERENCES public.proveedor(id);
 H   ALTER TABLE ONLY public.producto DROP CONSTRAINT proveedor_producto_fk;
       public       postgres    false    2720    199    202            3   g  x�-U�r7=7�"?���QK,;�����R�āɉF3��P���y�}�T%���m�t3Ձ����s[I�KL��)�lK*�;F��2���8�G
�,!�`��$�S����C���M[����"���ѠlS�V���jY�6W����:S'��f�I}��ΊD5��q*]�㱍s��\,!�d}}g"}�Ok����0�3)��$a�P
b��ӱ�誮}ӻ��6�3�?��戍��&���~�u��u�-O����.D�>���m��`�~��]�yj/f8u ���%���v��Ж��U��1���u�����l��jjOm���a\��P !����Ƥ���B�u��T0s����A�d�m )�R�a�wu޽�ݲm�U%k��~�T�M �ٰ���n[ֱҗz<�f["0�;�>(�6H��ݶ��?��}}8>ʥXŗ ��t��e���4o�c��Q��&�Q��Do�}{h�nN��@�Tbt�L�ϥ��L��y��|v ?���rp	����gK�)��.�Tw����������2f��aTG�;�1[��8��,��o�y޳(���ϊS[N>a��O��iݏ�#�����
�%���E�q��j�>1���PA�<`3Q���᥁��r� �fQ�� �F<��45���A�IPPa��]�d$�	�F���;I���*�-� ����[���A1��g5vV;Ht�&�F�?��m��q�`[��Y8*@b�,B2�x<��4�`���� jS�C-��,��~��B_�#���mj����R|���V���Qד�� �^�����Gc�����E-�L���cWvB��[�Et3���d�+�%�B�u���������L�%ǟ�t�@�;�F�n�y��  ��~����+�3J)�:Z.I/OO�mC�޶�'�,0�C�b/b�0���Gg4�a�e�j�cd#a���}G��ߌƳkڄ^Do?,�в.'�^{��l4��6��u������̩��-5��f�=�S/⛶ ��M�K�Y����-t9������5�(IBg��Qqp�w�@zB�kZT�':,�t0�h]�6<�x�����fܥ�y������#rN�T4���v��&/���܏u�mh�o��=��� gKRor(,R��t�8����͎����PN$�K��5��@8O'踵�*=$t3Zt���Nq�<Jr�q{���p.�좇g�q�m�~Yq�}�
�W�>��
ϓ�����G�{=�ޔ�!��o���k>��C�����?�ФЫ	`���e��t^�%!�oX�	���i�����k$�"�x=�@��c��n���n�      5   @
  x�eYٱ$1
���7R�pb-X��X.�����xSU� IBӇӷ�/���������|����������������_���g=wE�r���3և>�yc��-Gv?rƧ��%��zV|=���c���}6����|���&zN��&#��>�j�a���k��6َ1��p�?C6���:N��?C7��EQ�z�����V#s+��� ��	��*��V:�(n��bW��̳An���cr�M�nI�҃.ܤ���+���9�Y �m�r����yA�g���/�q{tj��j����1�=(F�p�`$�ȕ�Ɓ@��T7f���̍ƈ��͵^p�Y�P��������?�H��(�U-���`!/�^��=�5�:��� �+���Y�q��x�ϥ���w��U}lw=<����8:�����8?p��p�_s���Q0�1�=?-�tC$%����������xեn�g�N�Ÿ~�R���Tw� B�����myn� �|�]�K��	��#-�aJ&��y4�����M�M��%�d���?0[��i��Va>��z�o�
в,^��Ŋu�箦���l�*ޜ|�ԡ�I�MpM96�Z��gR��0W>����y6�y9;�|����� �	
�e@Aq�e����
���ɝ�*�+�3@+O�Kf�҆x� 
-u�l_%�v�(M������z�6$uV�����Q6ޞBk��3$i�KܺAc/O�
��xn4��]�g���BF[�n��W_Dޗ--3Vj�/� �9i%!Cz�vGX�=�08��'(c�,C�;��)��8�r+9-�8cߍ�Zܼ�>8Ϟ�we*�K�C��9����t�b�2�*��]�c��v��3���������t
�f,a�q #��<�}���@3��Jh@�i�qL)��Q+4vB��� 0�đVC�N*Y�q�>��N�@��l��Qo�sz�R�?��X.	�`\���u�B���h��ƹ��ŕY��x�Rj�6_Zz�ZL��O5Z�S�2Bݒ:Dq���e��y�N�B��qY��jE��T�T���\q��.E�y�hpj���&.w>�l�BL> ^��-~�g1��h?Ģ�kT�rI|[^�Ũ��"����W�{^[�4ۥ���V���ݖq�(�55�߮.Dd9mnw�uX��ߵU�?wc4 ��BM��~�<��[��U����KMo��^��QЧ�u\f�e�U*�Q��6���C����B�kn���ߨT�(R�HV�b�np�s�k��a:
�D�]�W?h+����n%����n�hXO������P�jڇ��ֱ�K�o�re�'�(o%��r�M/�)��5i>b��k�0��ӳoڍ�N�yQ�b��%%�ZF�.)]�m_��>�OV�ߋ؀y�[�	d���蚐o�C1R��(��j{G�{��N� �NQԣ$�o!�o^��I����?�8iU�L/���ҷ���Qγ�-�9f5.5h��2�sܾ[�x�w| �����zp�BvE���U�� ؚG��|ӨP����0���
�`eH���I�H������	�Jo��
��e$�����J�5�Md�]"�E�����u�[�8:ɠk�D��P�[�ۂ�.raզ��?XX�s��/J�� �nz�u��=�V����Qj�ӭqs��A8�8pQ�oAh!T����)�a1��qsö͌냆�Q`tZꢝ���L=0���� y���Rn��Nڦ���q+4��հ;����mL�N�J?�GE^��%myFp�⢹�O�|P�?���X�^�����1����#/~JYR&��~\6�49$��ξ�V+?[^9TZ��a)G
��g�hL(`e��C �q����>,�0�N����ur�t�s��l�@E��>�-?8r�d�R�A�{�=���%�43�bh�㸤�.B�9+��o~P���WM,.S�Ol�r��jF�����\��E��>����H�+g�9t�+��7�Q+������(<Q1�g�} ⟟%�������Nꚉ}�q�bּ�HH.s�����n7�a7葘j�f*�S�M�%2 G���-UGI�2�8W@�(�(����@�2A���p�(s���l�k�3
������pTO���Q�s�tA���K��4��)���a5����h��l�{ձ���吾H��G*�����������n���$g�)�U���'(w��򳖦M����N����&ʐ���e�Uģ��͔ڳ�xM��Z{D�o�9��I����S|�k�v�?��:�^����zѠa�Ã�&4e�ngW>іx�X�5)������]~nR?���UT͌
h7���jB�/p�F�Y�+���V��쎄n!�d�%�������S���G�/W�����F��?ml����@�l���̺�����,����t���	g}ճњ7h�o�yCT�^׏r���(;���F���[����@c����G���u�.;=�"�U^rq=Ii���C��o���~��)g�r�� �\�ؘTB����Q�S�攎����GT�t:x���Լ���Y������a����v���y���짙2      6      x�U�Y��*D��b����_G��ou�{Ea2S����o���I�������cL��-{RO��<�ӂ�w{rs����%�'���R�b�M�KOO�L�g��5�����=��)5�Dcbo��5�,̧����V�����B�O2�;�)�w��H������&���d���yo�4מ�E� ��[SL!���퍅������������xբ��4�����N��y2�UҐq�R��/��ГZ5�5��TB���]뵡ՠs��/ﴵ5�-���x�i����f��Z)��b�����c�؞��՝��S�~���ڋ1SG�ڒ"b>��R�grWP��ɜo�s�$Uyb���w�&YoX0\���;XT&�5�Z~oz\aa���7�rr���o�.�m�<m06�yZ!�iW��ɃE�[qam��\j:f�����F���oh9yG;����:;'ڂ��m�9y��v߻6�j�1�{#O��9�P�H/
��<gJ�⛷��6R�T����=�pi�ࢸB�״�i�?��sw;�z��#N'���e_rFcUB��g͌�ֻ�+T�H��7�-���=��q�k��vk�[;�]se�Y�}��hL[ &��{�
w6�F����T�b˚�jT?�bo�Q�9�u:.[�'�e��y$#a�@0B�?ؒI�{LA;w�(��9��57���%e,�7��vx�Z%�k�[�%4|�H���<�s��dn�����z7@����V��$���i����1B��/O���,��`��|�XЂII�d=�m[�����lw��^<z�.ɥ���)���Z����리�R�˩®��B&CR�ɣ3.�:(�Vn}G��4���vz3�[���@��s�Ġ�I����'�b!i#l�ģ�0
�Y��";{6OB�:��H��C�)[��o߹i9�FS�;�A�0�gGSjnHx�rA!�vfb6�&7aSǢ�I�=s�i.R�DFy�^�T���<;����Y�&��a��>���'9�S�Ѥ��^� ��
)��kQ[ +�	"�ax-�wd���.Eq*+)����qD�X_L��������ɯd�̸�BV���r�v��~�l�o8B�>[+2a]�gK����@F�{�D�'a��!��7����M�ͅ�(
Ѷq�!
!��0�oID�@�n΄f�_t`��Y�ހ��I�ɴ�,�&��a�}�P�15{:��2��3��� A�g@�C-�{Ѩ��r}��б���@�b��
p�l���k_�@���\詬c`:Ay�vd�,$MR:�Ы���(�A|�����u��`f����)�C "6[]*0� z�A4 ����ȑ�≭���!�P��P�R���te����-�?��ϖ�l�����,ל)��8��옠�6��&��\E�(�2�ȉpBې��X�3>�`аl��"�	�	?��t�SD50�E���$(үnFG�Ȼ�m��� xp�K/���p[=).4K
-QP�	.�͑Q"��0��u�	L+Dx5�/\���~����,W(�+G<�A��yR�{���S	Xd�]J���-Lj��- \��osK���kY���y�#�� :$�7H �hg,n��͔�ͩ6���D )C5����l�K)�}ꡪ¨N�����!*���Z��X��`���m����̎�*e⁏I�c�Y�Y��jS�q���Y���/p
6�OS��\�^�E��	�tF&-��;����o\�a�$�4�rM&�M��N��$�Ǫ�?'UT� =!�I)��sfr��ڳ�q�҄�@�0j�Nx����Vy�wI��gB��Z�Z�װ��Gǈ��]X圠�1gp�T���ՇC����$���.��U����m8ґ��C ���u���""0�)brc�R�8����w�(#�kN�u�*PT��Xq�^���]���R�M"����Ѵ�QDP���zi, =�PVřA1�yѫQn��ң,�w	��	nN-<��VI%e��l�ܩ1�V�%���$=�ѕq�;mb2���*�[)
�jeD���\�D�u��TŮr�C6��Sʬ�,T��0��B˾B�% .�p}E���N��x�Ƅj�Ogc`W�ӋW��Q��tF���|���=���G���g�i�ȴ3��������z���AT\�;SR7m��ԣ���gt�R�iFՒ�#�u�X��V7D����Y��[�7���d~��������d4\඾�,���u�.
L���z�W�2{8ɵA������Jjt��X��uqO|���{��@s�'��@2R���*�5l�t�_��UN�L��NOF�(��b����(��Z,�Psa	BQr��'���,���K�2j�:GGD��GvI��᭥Lc����:rD�TMn.<�rհ9���I��V��!��>�dݥ��q�e���'��{QL_��x.�템��3����m�*Z��n�Bo�A�EK��^]?>	�߷���vt��Km�d�	#x=-�����t&�E���&�L�4o(�O�H&i����k9<��P��ć��d/g���R��Yv�Zc�v"�h�@
�\H8���W���|��(�6ucM	���d�,NB�P!}���6�oߧDFa�NhN��G���ɮL�o�S���D>�g�2��X�����Uɫ7���MT�2k��Kh�#�&�iݾ~j�.@}o��ݙ�F�4�o�>ϒ%�k�+d�6ܖ��я&O�ʏ�-Z�����IlBqG>	�tL���y�^39���^�Pq������I��H{������Cg������&��V�lvx���3��U-n;�$��j�֓�����EF�B�d�9ZF�=3=a�a��u�ʙ�Apx�Wh�o���%��.}BN�EP�k��'�4�r��:���+y�V��ii����[�Y����Un�OE)7�K����h��@Ѓa���4��N�~�X�B�4j���5���;ѽcܧD�;9��E@r�._������8����Ю� ���=f[R#2�j�	��&9�P���z��d�,~1�@u�����Zd���.WTni�{	�9��Ł�u�%�z1�ad4��m�v�#������.O��F]��s���f/ј�u��xԞP�l]Qܟ4�luee�.a��&�o�������tY���Hb������޶�*F�k
�u�+X	{���mxu��!�baC�dZR�AD'&E�Hi��䲃F�.;��v� ���_KX�a.Hhv�ɓ]�����+Ɉ���juД7
��lr)ƭK#�vC�$���]�_�S��桰7�#�ca\��:].�~:�z��V��/f(�P7PU;ix�6)�^<Ibj����o��mqZ�����/ܛݶ��\�S=lBJ�#K�S�|N���"��a��L� �NW�ymQ�bW��DF��y��$��������Rk��hn��p���K���%������7Y&=2��vQ��6&��ډ��me]2�_�#3$��.Wѫ��n��k����<��_�����ʹ��<z)d��вc�����)�ܛt��Um˟�d����5�����_�X����q��B/�$��/��4��/i9}���a���/�S��-(��������u]:=�<:����G�+�s/H+�03���&O�gjx���4'��ila�s�7`v��Da�%�����kI'~x��d���)��nڵ�m�+EKL��dG�XW�EEM���<���g��R���h]WN?ĩS���Ҿ qqc�G��?�w�W���g>{:�Rt�(V�T�W��O�Du�F��ŷ|�4(h\c���qG���~�X�V�޵y�o!�y�'��]��'��Q2���8q�ޒ3Q�;4]���-tL���W��&K�x��#I�B��@8���e���|�p�܃��Ri]2��yWcn]�e�K�,K���o�^���ZBqcw�D�B��.�K>�v�U�/���08P���kp>���_�p�b_��KD�~I�mzT�߅AȂې�L�3��}��|zSl��T�Z���tt)�S�
Gg��:��v�I�"{i -  
�˭b�R�b܅I&)	9R�-K@����7%sQ*(�q/Sd�v�6��JL&*����U
���;��^d��B<���ב��I����/P&w���F�
��a���\�J���NY��j��� �W:e�q]�����b~�d�_㰹��:���+��.�lCJ����9�	.O��G
m�L��h�m]R)XY�2���K����
��[��T�D��(x>�ࣣ�LA����RD|_�u�HyDJ��z���, ǭ�-�|��g>2�)�q��
�EZ�Q�T������X������=
�O��*ǋ�s�Lv�w�����%
�t�O������d���+h�(��'�̼qv�[�̥�����r��;S�v�'\2�+#`�2��@��'.�7�D(?i�d��+�sO!QV(
A����B�N^�iUs9�?�6x������C(߁_v����Ƣ`_u­�a&j��@~��&���_u�dGd�7�O�I�������~��0r�&Z��w��_Hw������$�_��}�*��8�ދE�u��Az�8n���G����N�      0      x�3�tru���2�tqu1b���� B��      ,   o   x�3��.��K�2�,M�SJ����K��2�H-��2�*-HM�2�I9�\f���E�\� ���.��%�vCN�Č.CCN��Ģ�<���K~Nb��1Xw1W� �W$�      -   �   x�U��
�0�ϻO���� �A��7/k���1-I�ا7=z�`�F��cC���A,a
��{!̠&Gz�/�pr���n��Ŵ�zta�dp�����	����lQ���7�q���}è�#�4���J�JE!��#�E#���l�zG�.O~��T��[D���;      1      x��Z�v۶�}����@�c;q�'ޱ��}�y�%ZbM�.I�u���	ʶH�ѓ�d�$�˼,H��]��M���}��~#�R��R	�y*���P��m�ev����}�MU�QH�S-��N�S���Q-��d盲�����S����=�B�;+O���nQ�����ҫX��n�r�c�z%�����(��S{�f�0��=�}�+�/��M׶[a�=U�0Bώh�e�>;���e>���(�Q|��
ujN|��7u��{�:�:~Q;_�	/�a��j�C���Z�F��z|H!� ��%�l� 
�5�����O����B��,���m٬ʮn�F�<��/
�;=������+�04M�J<��EQx��"�?��O��TCy�}���ml��j�`��֜ܔ	��->�ulV���W=�P��&��՟����8��*���SY#��Pݷ����1�<�Ǵiķ1n?�d
��RH��ݬ��K<yv]�>�/��f%���B:��*f?�0Q����/'�6&��E!�OK|_a����������[V?b�͸�1H�� ���Y��e#�����:��u��|�Wˮ헻jZ�
�<
�V�ΎEg{��ͺ}˂T���r>x�'�SJ\ve٠�b���g��Q� �N!q�����a�|(��E�Ò�]l🰹�D���f�m���~t��g1�2�"f�Z����u7U�Fu�0�ע�f�AA�+��x_�X�Дk�S۔8�X1(6�f���8�]��f�@�\��D 	�;\$��������X�%N��m�q���*���)��`�g� 	�������8���u���|�>��b�2�g~�լ�Q��m�P����f]W��.>��zD��+T+q�R]�_�fg��]9%*KrO��iO����Xǻ��t��ǽq�W<�%39�.��2�\:�~o���n9E��������q�Z�����������{N}�j��L.��|ÊwM�s/���z���=0/�4"#�A�-4�j�nw]�B�)B�'اս� ���nxG����}`��S���៱��*!1�/�gQ� ����g��]|�+;��s�m��*�2 0�lp�i�����s�ٷu�S'�Aո9q*���.*��ˮk'���$5��G���3�LA��w���TNJM�o�ۮ�C�ϟպi!u`*�"��=3�kglT�/�Q��f���_��V�p�O:�J�N-
��A���Ab�,Hz�kw�yV��Q�����SA�ǘ�7�Y�$ �h|��#tA�^�K �0%�S�`�MV7R|m���⩱	x�P��H�F��-�R�{�v0$Mb�(w��X��#?"�_�"e(�R�����P�����I�HV3��iEt�}(W9�]�I։���u�Z���v��%������SղE��p�	�(�9�����&x������]3�L
CE.p9:e��&��}�?���� &Y%.	�	u �S��h����4}���Z���d���Ǫ�]�uK�H�ۜ�&�R3Զ�M�]�~�Gғ3&� K�N"O����^-����(�n�P=YY�����ӣY�8v,���l��;,t��ȓNU k9I �,�j�Nw�v�в@�Ӱ�,g�[������y�"uLH�!CN�	�Z{�K|[��)�Ǯ*�gd;w�Hb����$��j�IeQ@*M�����|�Gv�.�n*�n�:5�WP�б ��S��h󛡪�]��R�����\\���.���扛�_���f(a(����������s��ն�� R�/Jj��
?7:N���q,���FxC��#�g��r�=�b�Z�X����Ҳ�C*_��\��
~W4��įڥ�[��8�"�.��yHI��C�X��&�u��.h9ݼ����i����c�I�9j�H���M[g�m�%Z;�}�*<��$���_�R�ʯ)k*M/�b�?OE�y��~��_�;�VH����3��Hj ��� u,=k%G.`-��x��
�� &�Ai*=\�n�-�����&�.��A��g���g[�`x�k ���#I�{���AK��C��)�x��*��0D&+���3��K�?-OQ�ܴ?��2���f�Pnw�G�� ��T�P���7�X2!��cL���{���@�w t`>�kx6;�`S6����i���3@Gǉ�$��3mܐ�-F��S�^Ʈ��ٯ�Gt1j&��m�����a�E(P6F�s�ԋ؟�7J���fK�G���A�V�u�� ����fM�W�"��љ���(���3:`�ΘBb0�Kۮ�D��%w	�A_�n�m�얨!5�w���������)��k`�\r����p�ܡ��v}_�f9" �U�6z�y/�� ��r,��n�^��4P�Y���b,��PA�9�Z̢A�!���޿�~�5�;��:q���|N�K����u9�;ʌv�0Ī&�{�=�\�����E)]�O��-�(M���l� "��4���FhQkr9K��Zf���5�\f����h�RSQh;�p��9���|v��;��C���/s ~�C�$U���Ka�<����CrNF}&�Ys�IVB�ЈJ��!�DWb��\X�Q��Ȑf�R�Mx�b Y�bw�]��j��,''Y�Ӵ�w��?���rK�kh��dϣћ �I�2R���(���k($|��[�5N���?��RBC���o�F5�ߗ��ew�vp�4����|�[�4��/:����1�Ԭ���j��sn�2����/,�/_}�U����|��'����i��1�\���� K���R�1YF��}����8ZuIS�@�5�e��D0%58AZc�>O�}.�a��w�n�C�k�8]�ꙝ��U=^���=?`3����85j*������{�B+��i�L_��ٯ��H����π#� �@ȶ ��4%�O�
��aG�!L��3�ũ��_��2��ٗ�B�B�e�A�+���N�5;=:���?Ɵ�#�����s��Fٰ�R�ա��g~ح��,�L���^a�2�+,�������?���m޷WWߪ���Q	嶢m�ﳎH��R;*�Bh��A6�"�����I��
��Dp��%��8s�Y����J��$��<}�� �|���`.��h� 6���H7�� S8�D�i6U�t-u���޷p2]� ���`��Uj0]f�_��}�x'� ���eƞ#�w���(�k��!��eS;:Φ�y����
�����JR���8�; �� ��8��Z���2yڒ_�:��`��'J}�sP9�����'Z�]ω���e�^g�S�q�� ��U�ی�1�����q0
�]l]t4������ަ��4��De57ܒs��o>�ְ��u�)/(�����b�����@zo��*zX�k�������N4�4zB흛Y-�6D���\p`6l��C8�{���B�cH8�H�K�Et��D��>v�
Ѳ������@�����(w$���4z�L�˒Eϑ�D��#8\U�We����4�#��6@��Z:}��y��ޥ�1���%���G��l�t���}�qx�)t$�)4�,l���}��Y�=g;����|�*���������O�?�Ȧ!9��|6���2��̶[nP	��C�y�1ⴌL!>��i�ɟ���H��6Im#n�:>Vq�����������%��4����cc��NjEi��O�����g8."��Gp�x����H%'{
D:ޙ���\8��a度X%���Ft��f����I,���"μ�n	 ����)�F:��}I0��xCܮ6�L��Tf���F�{�=\�@[,�I�������)}t)�|O���w[Д��i1���/[��m�ݔ�:n���q���"��v�~��Ҽ�F
���U���*>�M�t��y��F$قc+8�y�Y�����1]&�����^j�t�������HgZ/�w]9�>b�ko>�|�$m��Fɗd[v^�\ �  o�AO�>W.{j�%��W��d���G6HG�`�Z��{��'w0@��<zF���$k���6�ԫ}�ݛ���Y�x:��ݛ����$�Ԉ�j�w�zC��2�t�]GL7�<�-�+ ��#�t3��ݖ�ĳ��O6���ة������Y�>5'�۔�.˸�¼x�C���]��� �Yn��u�$��G�M�Ǟ8A��V�Cg���*��P]ͪm�*u�c.�;�@��^H�*�n��r�9�Q#G��:Jg���<�!ԇL��-��b��A����=�u5D�X���4<;���޺�%=w?��&���i1�b%�<#G	�8�(���:��OrN^.���N�々���Vp ���{��û"�~TŠs�N���K�mzp7y�ƚ{�qt�H��2å	2ܲ���|�@e,7��+��j���x�l����B��U���r3��䚳�镈��ph��l��y�'��zz��_/��M8j5B���O�e�/7��j�J�@W���C6�XJ3��.r�S��]�1s�KvIz���œ�t^�3�?�_҉���<g8�.�>p.�5Vi`�$����W�:o�#$�S��e3J��Q�Rx�	�0^g�<���v���TgMm�7�¡�o�xZ�]�aK,��?�2H��jxW�qy����8�08����7��{�X,��٤&      .   E  x�UU�n�H<7�� -��8�qlo,'��� �^���p4Ԓ���SC	pH� 4������Ά�ݵ��0��K#�RL3r��M��q�����6����}�9SZ�#�6�n��O�ߥ#ə��3ራF��6����,�%ő�SZY#\}R��\��8MCY�Wa�r^���q^&�^0o��Tc�zަn���s�j�0G4��S��2�ڛ�]�>�qi�%�2��TJ����]�ݥ�a�%< ���ąp�L��6�n�Ű�ei�3E�,$�c���pF��ؽ���n6�)����.����X��Z�0���ʪ��B������Wb�ik�f��n��`�!��s,}*�"��1
����=�X[m�}xHb�fg<cuo��|��r�����8 3c�����Y؎�<a����t�'�8�i�K�9���o�m,�X^����+Lr?Υ���aܓR^W�c���U����w}�q�҂&���U0�;}\�,G�O�@IafI�����;�V�+@�t5ǌ6_'�֧���<�*:\�qF��B��j<��Ǔw�R�W�cq&,��7B�&����!�*�B�ei|m�韜�T� ��a����	)p�B-7t��x�S^b���t#,}���6���	����W���!�}*�RU�S��-<���Z�b.��=mG�+���J�D0�j�p��F�u�{���Y#9-C������k,��]ݤC(�7q[��X�r�đ��L���89D��n��K�g՞��t4��P�=��1δs�hY�5]瘰�u��NJ}^J�s[s˪z8��rZȝ�:�
f�G�,�X8㡊S� _<��C`�H���\'�I�ňt�z��I�l]���|6�?#!O�u���0�b�)+�qq�@���Pb�)p""�^��S��y��Z7
	�����`#� ��u��@�m�nY���ܨڼQ
=���ｙ6R�h���	3��X�G�5`N�=�@#$��`���ΰh��n{�9�䐬/$�i���p�����f��4p:�ƇU�9��i���ؓ�uJ�Ԟ~���2�i��s)]�Q��I$�Z^1x����=�x�P�sе࿿�����=     